const $asideButton = $('#asideButton')
const $asideContent = $('#asideContent')

$asideButton.click(() => {
	$asideContent.load('../sidebar.html')
})
