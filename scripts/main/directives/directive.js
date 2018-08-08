app.directive('dropZone', ['$rootScope', function($rootScope) {
    
    
  //   return function(scope, element, attrs) {
      
  //     element.dropzone({ 
  //       url: baseUrl+"/uploads",
  //       maxFilesize: 100,
  //       paramName: "uploadfile",
  //       maxThumbnailFilesize: 20,
  //       addRemoveLinks: true,
  //       // uploadMultiple: true,
  //       autoProcessQueue: false,
  //       parallelUploads: 50,

  //       init: function() {             
              
  //          var submitButton = document.querySelector("#submit-all");
  //             myDropzone = this;
          
  //          submitButton.addEventListener("click", function() {               
  //             // $rootScope.$on("getProductId", function(event, id) {                  
  //                 // if(id != undefined){
  //                    myDropzone.processQueue();                   
  //                 // }                            
  //             // });             

  //          });

  //         scope.files = []
  //         // scope.files.push({filese: 'added'}); // here works
  //         this.on('success', function(file, resp) { 
  //         console.log("dropzon");
  //         console.log(file);
  //         console.log(resp);
  //           // LocalStorage.setFile(file);  
  //         // $rootScope.$broadcast('successUpload', file);               
  //            // console.log(file.previewElement.querySelector("img").src);          
  //         });
          
  //    //      this.on("complete", function (file, resp) {
  //    //        console.log(file);
  //    //          console.log(resp);
  //    //        if (this.getUploadingFiles().length === 0 && this.getQueuedFiles().length === 0) {
  //    //          console.log(file);
  //    //          console.log(resp);
  //    //          // console.log(this.getUploadingFiles());
  //    //          // console.log(this.getQueuedFiles());
  //    //          console.log("completed"+file);
  //    //          // setTimeout(function() {
  //    //       // $rootScope.$broadcast('successUpload', file);
		//    // console.log("directive "+file)
  //    //      // }, 5000);
              
  //    //        }
  //    //      });

  //         this.on('addedfile', function(file) {  
  //            // LocalStorage.setFile(file);   
  //            console.log(file);                 
  //           scope.$apply(function(){ 
  //            // LocalStorage.setFile(scope.files);              
  //             scope.files.push(file); 
  //         console.log(scope.files);

  //           });
  //         });
  //         this.on("removedfile", function(file) {
  //           console.log(file);
  //           console.log("file remove");
  //            scope.files = [];
  //            console.log(scope.files);
  //            // LocalStorage.setFile(scope.files); 
  //         });

  //         this.on('sending', function(file, xhr, formData){  
  //          // LocalStorage.setFile(file);         
  //          formData.append('file', file); 
  //         });

  //         this.on('drop', function(file) {
  //           console.log("drop");           
  //         });
          
  //       }
        
  //     });
      
  //   }
  // }]);





return function(scope, element, attrs) {
      
      element.dropzone({ 

  // Prevents Dropzone from uploading dropped files immediately
  // autoProcessQueue: false,

        url: "/Appa/uploads",
        maxFilesize: 100,
        paramName: "uploadfile",
        maxThumbnailFilesize: 20,
        addRemoveLinks: true,
        // uploadMultiple: true,
        autoProcessQueue: false,
        parallelUploads: 50,

  init: function() {
    var submitButton = document.querySelector("#submit-all");
        myDropzone = this; // closure

    submitButton.addEventListener("click", function() {
      myDropzone.processQueue(); // Tell Dropzone to process all queued files.
      // console.log(file.previewElement.querySelector("img").src);
    });

    var filess = [];
    this.on('success', function(file, resp) { 
          console.log("dropzon");
          // console.log(file);
          // console.log(resp.fileName);
            // LocalStorage.setFile(file);  
          // $rootScope.$broadcast('successUpload', file);               
             // console.log(file.previewElement.querySelector("img").src);
             var fileContent =  file.previewElement.querySelector("img").src;
             var fileName =  file.name;
             console.log(fileName);
             filess.push(fileContent);
             filess.push(fileName);    
             console.log(filess); 
             console.log(this.files.length + 1);
             // if(filess.length == this.files.length + 1){
                scope.uploadFile(filess); 

             // }

          });
    // You might want to show the submit button only when 
    // files are dropped here:
    this.on("addedfile", function(file) {
      // Show submit button here and/or inform user to click it.
    });


  }
})

}

}]);


