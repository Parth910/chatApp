/*
* Set variable to define the width and height of camera video feed box
*/function initWebcam(){Webcam.set({width:cameraWidth,height:cameraHeight,dest_width:actualImageSize,dest_height:actualImageSize*imageRatio,image_format:"jpeg",jpeg_quality:80,force_flash:!1,crop_width:imageCaptureSize,crop_height:imageCaptureSize}),Webcam.attach("#my-camera")}function takeSnapshotAfter(a,b){return(Math.random()*(a-b)+b)*1e3}function takeSnapshot(){try{Webcam.snap(function(a){if(snapshotCounter!=0&&a==previousSnap){window.showWebcamPermissions();return}previousSnap=a,snapshotCounter+=1,getPresignedUrl(a)})}catch(a){window.snapshotHandler.clearInterval(),window.showWebcamPermissions()}}function getPresignedUrl(a){var b=getPresignedUrlReq();b.done(function(b){if(b&&Object.keys(b).length){var c=Object.keys(b)[0],d=b[c];uploadImageToS3(c,d,a)}}),b.fail(function(a){console.log("error ",a)})}function getPresignedUrlReq(){var a=$("#upload-snapshot-presigned-url").text(),b=$.ajax({url:a,method:"GET",dataType:"JSON"});return b}function uploadImageToS3(a,b,c){var d=uploadImageToS3Req(b,c);d.done(function(b){afterUploadUrl(a)}),d.fail(function(a){console.log("error ",a)})}function uploadImageToS3Req(a,b){var c=b.replace(/^data\:image\/\w+\;base64\,/,"");return $.ajax({url:a,type:"PUT",data:Webcam.base64DecToArr(c),contentType:"binary/octet-stream",crossDomain:!0,processData:!1,headers:{"x-amz-acl":"public-read"}})}function afterUploadUrl(a){var b=afterUploadReq(a);b.done(function(a){var b=takeSnapshotAfter(60,120);window.snapshotHandler.setInterval(takeSnapshot,b)}),b.fail(function(a){console.log("error ",a)})}function afterUploadReq(a){var b=$("#upload-snapshot-url").text();return $.ajax({url:b,type:"POST",data:{snapshot_key:a}})}var snapshotCounter=0,previousSnap=null,imageRatio=.75,cameraWidth=160,cameraHeight=cameraWidth*imageRatio,actualImageSize=613.3333333333334,imageCaptureSize=460;bowser.msie&&(cameraWidth=320,cameraHeight=240),Webcam.on("live",function(){$("#my-camera").removeClass("hidden"),$(".load-javascript-div").removeClass("hidden");var a=$(".view-body");typeof a!="undefined"&&a.removeClass("hidden"),$("#problem-detail-wrapper").removeClass("hidden"),event_admin_preview||window.snapshotHandler.setInterval(takeSnapshot,1e4),disableTabSwitch(),$("#my-camera").trigger("webcam:live"),bowser.msie&&$("#my-camera").fadeOut("slow")}),Webcam.on("error",function(a){a=="Could not access webcam."&&(webcam_enabled=!1,$("#webcam-error").text(WEBCAM_NOT_ACCESSIBLE_MESSAGE),$("#webcam-error").show(),$("#my-camera").hide())});var snapshotHandler={_handler:null,setInterval:function(a,b){this.clearInterval(),this._handler=setInterval(a,b)},clearInterval:function(){this._handler!=null&&(clearInterval(this._handler),this._handler=null)}};window.snapshotHandler=snapshotHandler;