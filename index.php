<!DOCTYPE html>
<html>
<head>
	<title>Test</title>
	<link rel="stylesheet" href="bootstrap.min.css">
	<script src="https://unpkg.com/jspdf@latest/dist/jspdf.min.js"></script>
	<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/FileSaver.js"></script>
</head>
<body>

<form id="book" method="post">
	<div class="form-group">
		<label>Title:</label>
		<input type="text" class="form-control" id="form_title" name="form_title">
	</div>
	<div class="form-group">
		<label>Author:</label>
		<input type="text" class="form-control" id="form_author" name="form_author">
	</div>
	<div class="form-group">
		<label>Description:</label>
		<input type="text" class="form-control" id="form_description" name="form_description">
	</div>
		<button type="button" id="SubmitForm" class="btn btn-default">Download as XML</button>
		<button type="button" id="SubmitPDF" class="btn btn-default" disabled>View PDF</button>
</form>
<script src="index.js"></script>
</body>
</html>