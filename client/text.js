angular.module('textEditorApp', [])
  .controller('TextEditorController', function($scope) {
    $scope.content = '';
  
    $scope.newFile = function() {
      $scope.content = '';
    };
  
    $scope.openFile = function() {
      // Use FileReader to read the uploaded text file
      var fileInput = document.createElement('input');
      fileInput.type = 'file';
  
      fileInput.onchange = function(event) {
        var file = event.target.files[0];
  
        var reader = new FileReader();
        reader.onload = function() {
          $scope.$apply(function() {
            $scope.content = reader.result;
          });
        };
  
        reader.readAsText(file);
      };
  
      fileInput.click();
    };
  
    $scope.saveFile = function() {
      // Use Blob to format and download the text file
      var blob = new Blob([$scope.content], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, 'filename.txt');
    };
  
    $scope.copyText = function() {
      // Use Clipboard API to copy the content to the clipboard
      navigator.clipboard.writeText($scope.content);
    };
  
    $scope.pasteText = function() {
      // Use Clipboard API to paste the content from the clipboard
      navigator.clipboard.readText().then(function(text) {
        $scope.$apply(function() {
          $scope.content += text;
        });
      });
    };
});
