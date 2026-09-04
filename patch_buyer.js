/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = 'c:/Users/LENOVO/cei-amethyst1993/cei-amethyst-1993/03-08-2026/cei-api-files/ceifair/php/class/class.buyer.php';

let content = fs.readFileSync(path, 'utf8');

const targetContent = `            // Update registration_no and set status to Approved automatically
            $update_stmt = $con->prepare("UPDATE buyer_registration SET registration_no = :reg_no, status = 'Approved' WHERE ID = :id");
            $update_stmt->bindParam(":reg_no", $reg_no, PDO::PARAM_STR);
            $update_stmt->bindParam(":id", $last_id, PDO::PARAM_INT);
            $update_stmt->execute();

            // Fetch the buyer data array to pass to the generators
            $fetch_stmt = $con->prepare("SELECT * FROM buyer_registration WHERE ID = :id LIMIT 1");
            $fetch_stmt->execute(['id' => $last_id]);
            $buyer = $fetch_stmt->fetch(PDO::FETCH_ASSOC);

            // Swallow any potential warnings or notices to prevent JSON corruption
            ob_start();

            // Include E-Badge generation and mailing scripts
            require_once __DIR__ . '/../../ebadge_generator.php';
            require_once __DIR__ . '/../../ebadge_mailer.php';

            // Auto-Migration: Ensure 'ebadge_path' column exists
            try {
                $con->query("SELECT ebadge_path FROM buyer_registration LIMIT 1");
            } catch (Exception $e) {
                // Silently ignore if already exists
                @$con->exec("ALTER TABLE buyer_registration ADD COLUMN ebadge_path VARCHAR(255) DEFAULT NULL");
            }

            // Generate E-Badge PDF (suppressing direct warnings)
            $pdfContent = @generateBuyerEbadgePdf($buyer);
            $ebadgeRelPath = @saveBuyerEbadgeFile($buyer, $pdfContent);

            // Update DB with E-Badge path
            $updatePathStmt = $con->prepare("UPDATE buyer_registration SET ebadge_path = :path WHERE ID = :id");
            $updatePathStmt->execute(['path' => $ebadgeRelPath, 'id' => $last_id]);

            // Send Email with E-Badge
            $result = @sendBuyerEbadgeEmail($buyer, $pdfContent);
            
            // --- START ADMIN NOTIFICATION ---
            try {
                $adminMail = new PHPMailer;
                $adminMail->SMTPDebug = 0;
                $adminMail->IsSMTP();
                $adminMail->Host = 'email-smtp.us-east-1.amazonaws.com';
                $adminMail->Port = 587;
                $adminMail->SMTPAuth = true;
                $adminMail->Username = 'AKIAJD3QTDB3RJRCPHVA';
                $adminMail->Password = "AgiKna4VPa6osLcpJzW6R/Ge0qcM3RSEck0L/uTH6zaF";
                $adminMail->SMTPSecure = 'tls';
                $adminMail->From = 'ops@worldexindia.net';
                $adminMail->FromName = 'CEI Fair Registration';
                $adminMail->AddAddress('ops@worldexindia.net');
                $adminMail->addCC('ops@worldexindia.net');
                $adminMail->addCC('web@finesse.co.in');
                $adminMail->addCC('akash@worldexindia.com');
                $adminMail->addCC('saurabh@worldexindia.com');
                $adminMail->addCC('ashish@worldexindia.com');
                $adminMail->IsHTML(true);
                $adminMail->Subject = "Buyer Registration - CEI Fair 2026";
                
                $msg = "Buyer Registration Details - CEI 2026<br>Name : $title $txt_name $family <br>Company Name : $txt_co_name <br>Designation : $des <br>Job Function : $job <br>Email : $bemail <br>Telephone : $std_code-$txt_tel <br>Mobile : $txt_mobile <br>Fax No. : $txt_fax <br>Address : $txt_address, $txt_address1 <br>City : $txt_city <br>State : $txt_state <br>Pincode : $txt_pincode <br>website : $txt_website <br>Business Type : $business_type <br>Other Business Type: $other_business_type <br>Interested Products : $interested_products <br>Other Interested Products : $other_interested_products <br>Pupose of Visit : $purpose_visit <br>Know by : $know  ";
                
                $adminMail->Body = $msg;
                @$adminMail->send();
            } catch (Exception $e) {
                // Ignore admin email failure so it doesn't break user registration
            }
            // --- END ADMIN NOTIFICATION ---
            
            // End output buffering and capture any stray output (e.g. PHP Warnings)
            $stray_output = ob_get_clean();

            if ($result && $result['sent']) {
                $status = "Success";
                $message = "Dear $txt_name $family, \\nThank you for registering. Your Registration No: $reg_no. You shall receive the e-invitation shortly.";
            } else {
                // We still return Success for the UI to show the QR, but we log the mail failure
                error_log("Failed to send auto-approved E-Badge email for Reg No $reg_no: " . ($result['message'] ?? 'Unknown Error') . ". Stray Output: " . $stray_output);
                $status = "Success"; 
                $message = "Mail could not be sent. Reg No: $reg_no";
            }`;

const replacementContent = `            // Update registration_no (removing auto 'Approved' status)
            $update_stmt = $con->prepare("UPDATE buyer_registration SET registration_no = :reg_no WHERE ID = :id");
            $update_stmt->bindParam(":reg_no", $reg_no, PDO::PARAM_STR);
            $update_stmt->bindParam(":id", $last_id, PDO::PARAM_INT);
            
            if ($update_stmt->execute()) {
                $params['reg_no'] = $reg_no;
                $data = MAIL::mailer($params, 'buyerRegistration');
                
                if ($data === "Success") {
                    $status = "Success";
                    $message = "Thank you for registering. Your Registration No: $reg_no.";
                } else {
                    $status = "Success";
                    $message = "Mail could not be sent. Reg No: $reg_no";
                }
            } else {
                $status = "Failed";
                $message = "Error Occurred while updating registration number.";
            }`;

if (content.indexOf(targetContent) !== -1) {
    content = content.replace(targetContent, replacementContent);
    fs.writeFileSync(path, content, 'utf8');
    console.log("Successfully patched class.buyer.php");
} else {
    // Try a more flexible regex based approach
    console.log("Exact string match failed. Trying regex...");
    
    // Replace the block from UPDATE buyer_registration SET registration_no = :reg_no, status = 'Approved' to Mail could not be sent. Reg No: $reg_no";\n            }
    const regex = /\/\/ Update registration_no and set status to Approved automatically[\s\S]*?Mail could not be sent\. Reg No: \$reg_no";\s*\}/m;
    if (regex.test(content)) {
        content = content.replace(regex, replacementContent);
        fs.writeFileSync(path, content, 'utf8');
        console.log("Successfully patched class.buyer.php using regex");
    } else {
        console.error("Target content not found in the file.");
        process.exit(1);
    }
}
