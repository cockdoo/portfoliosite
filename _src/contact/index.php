<!DOCTYPE html>
<html>
<head>
	<title>Contact | TAIGA SANO</title>
	<?php include_once($_SERVER['DOCUMENT_ROOT']. "/php/meta.php"); ?>
</head>
<body>
	<?php include_once($_SERVER['DOCUMENT_ROOT']. "/php/header.php"); ?>
	<div class="contact-container">
		<div id="heading_bg">
			<h1>Contact</h1>
		</div>
		<form action="sendmail.php" method="post" id="mail">
			<dl>
	  		<dt>名前</dt>
	  		<dd><input type="text" name="familiy_name" size="10" value="" placeholder="姓"/><input type="text" name="first_name" size="10" value="" placeholder="名"/></dd>
				<dt>メールアドレス</dt>
				<dd><input type="text" name="mail" size="30" value="" /></dd>
				<dt>件名</dt>
	  		<dd><input type="text" name="subject" size="30" value="" /></dd>
				<dt>内容</dt>
				<dd><textarea name="body" cols="55" rows="12"></textarea></dd>
			</dl>
	  	<input class="send" type="submit" value="送信する"/>
		</form>
	</div>
	<?php include_once($_SERVER['DOCUMENT_ROOT']. "/php/footer.php"); ?>
</body>
</html>