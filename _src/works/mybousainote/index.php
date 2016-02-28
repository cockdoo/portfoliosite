<!DOCTYPE html>
<html>
<head>
	<title>My 防災ノート | TAIGA SANO</title>
	<?php include_once($_SERVER['DOCUMENT_ROOT']. "/php/meta.php"); ?>
</head>
<body>
	<?php include_once($_SERVER['DOCUMENT_ROOT']. "/php/header.php"); ?>
	<div class="work-container">
		<div class="title">
			<h1>My 防災ノート</h1>
			<p class="subtitle">ユーザーの生活圏に合わせた防災学習アプリ</p>
		</div>
		<div class="main">
			<div class="article">
				<img src="/img/works/mybousainote/01.png"/>
				<p>My防災ノートはユーザーの生活圏に合わせた情報を提示する防災学習アプリです。位置情報履歴からユーザーの生活圏を自動で割り出し、各地域において必要な防災情報を提示します。</p>
				<p>既存の防災学習アプリは情報量が膨大で、またそれらの優劣が付けられていないものが多い。その結果、ユーザーが閲覧時に迷いやすいという課題がありました。このアプリでは位置情報を用いてユーザー特化型にすることで、その人に必要な情報のみを届けることができます。</p>
				<img src="/img/works/mybousainote/02.jpg"/>
				<p>アプリを起動すると現在地とユーザーの生活圏のリストが表示されます。（画像はGoogleのストリートビューを利用しているため自動で生成されます。）それぞれのボタンを押すと各地点の防災情報ページへ飛びます。</p>
				<img src="/img/works/mybousainote/03.jpg"/>
				<p>中心点付近の避難施設、地震、浸水、土砂災害、津波などの情報の中から、その地域において危険性のあるものが表示されます。下のアイコンをタップすることで表示内容を切り替えることが出来ます。</p>
				<p>本アプリは国土地理院主催の防災アプリケーションコンテストに応募し受賞しました。また、鎌倉市で行われた<a class="link" href="http://www.gsi.go.jp/kikaku/bousai-app-20151114.html" title="鎌倉市におけるリスクコミュニケーション実証実験" target="_blank">防災アプリの実証実験</a>で実際に使用されました。<br>※現在全国版のリリースに向けて開発中です。</p>
			</div>
		</div>
		<div class="information">
			<dl>
				<dt>主な担当</dt>
				<dd>コーディング</dd>
				<dt>使用スキル</dt>
				<dd>Swift</dd>
				<dt>メンバー</dt>
				<dd><p class="member">木村 汐里</p><p class="role">Designer</p></dd>
				<dt>制作期間</dt>
				<dd><p class="month">2015/8 - 2015/10</p><p class="term">3 Month</p></dd>
				<dt>受賞</dt>
				<dd><a href="http://www.gsi.go.jp/kikaku/kikaku40033.html" title="平成27年度　防災アプリ審査委員会｜国土地理院" target="_blank">国土地理院平成27年度防災アプリケーションコンテスト「リスクコミュニケーション部門」</a></dd>
				<span>Comming Soon</spna>
			</dl>
		</div>
		<div class="back">
			<a class="back" href="/works/" title="">作品一覧へ</a>
		</div>
		<div class="paging">
			<a class="prev" href="/works/petapeta/" title="PetaPeta">
				<img class="thumb" src="/img/works/petapeta/thumb.jpg">
				<p>PetaPeta</p>
				<img class="arrow_next" src="/img/arrow_next.png" height="40" width="24">
			</a>
			<a class="next" href="/works/cansatmapping/" title="CanSat Mapping">
				<img class="thumb" src="/img/works/cansatmapping/thumb.jpg">
				<p>CanSat Mapping</p>
				<img class="arrow_next" src="/img/arrow_next.png" height="40" width="24">
			</a>
		</div>
	</div>
	<?php include_once($_SERVER['DOCUMENT_ROOT']. "/php/footer.php"); ?>
</body>
</html>