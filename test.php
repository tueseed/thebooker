<?php
        $uid = 'Ucbdc56152fbc320e794b1ad825ed97a0';
		$access_token = 'QdPmFcnhuNZIyPvfGoutew70UT5e7R0vqsIm3lq25s4iqxk+fTA6qhgAELeXeUmWnAz+anJi7avep6NGQz5JF5PkD47vqe6wsKS61HMVNu+18HXh0aIOBHhzdOvOcAQQBLZrOLYXO+ORNIzYgRiCxwdB04t89/1O/w1cDnyilFU=';
        $messages = [ 'type' => 'text','text' => 'ทดสอบการแจ้งเตือนจากระบบยืมหนังสือออนไลน์'];
		
        $url = 'https://api.line.me/v2/bot/message/push';
        $data = ['to' => $uid,'messages' => [$messages]];
        $post = json_encode($data);
        $headers = array('Content-Type: application/json', 'Authorization: Bearer ' . $access_token);
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        $result = curl_exec($ch);
        curl_close($ch); 
?>
		
