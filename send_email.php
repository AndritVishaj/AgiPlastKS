<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Marrë të dhënat nga forma
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? strip_tags(trim($_POST['email'])) : '';
    $phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';
    
    // Adresa ku dërgohet email-i
    $to = "eriskastrati344@gmail.com";
    
    // Subjekti i email-it
    $subject = "Mesazh i ri nga AGI Plast - $name";
    
    // Përmbajtja e email-it
    $email_content = "<html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f1c40f; color: #333; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 20px; }
            .footer { background: #333; color: #fff; padding: 10px; text-align: center; font-size: 12px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #333; }
            .value { margin-top: 5px; padding: 10px; background: #fff; border-radius: 5px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>Mesazh i ri nga faqja AGI Plast</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>Emri:</div>
                    <div class='value'>$name</div>
                </div>
                <div class='field'>
                    <div class='label'>Email:</div>
                    <div class='value'>$email</div>
                </div>
                <div class='field'>
                    <div class='label'>Telefoni:</div>
                    <div class='value'>" . ($phone ?: 'Nuk u dha') . "</div>
                </div>
                <div class='field'>
                    <div class='label'>Mesazhi:</div>
                    <div class='value'>" . nl2br($message) . "</div>
                </div>
            </div>
            <div class='footer'>
                <p>Ky email u dërgua nga faqja zyrtare e AGI Plast</p>
            </div>
        </div>
    </body>
    </html>";
    
    // Headers për email-in HTML
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: AGI Plast Website <noreply@agiplast-ks.com>" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    // Dërgo email-in
    if (mail($to, $subject, $email_content, $headers)) {
        // Nëse dërgohet me sukses, ktheje përdoruesin te faqja e faleminderit
        header("Location: faleminderit.html");
        exit;
    } else {
        // Nëse ka gabim, trego mesazh
        echo "Ndodhi një gabim gjatë dërgimit të mesazhit. Ju lutemi provoni përsëri.";
    }
} else {
    // Nëse dikush përpiqet të qaset direkt, dërgoje te forma
    header("Location: index.html");
    exit;
}
?>
