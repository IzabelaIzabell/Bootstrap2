// bootstrap.min.js





let apiUrl="https://picsum.photos/v2/list?limit=10"
var gallery= $(".galleryApi")
var prev =  $("button.prev");
var next =  $("button.next");
var name = $(".modal-footer div")
let date = $(".date")
let time = $(".time")
let section =$('section')
var current_imagies = $('#myModal3 div.galleryApi a');
var index=0;


var more = $(".btn_more")
console.log(more)
var show = $(".btn_gallery")
var description = $(".part2 span.hide")
console.log(description)

more.on('click', function(){
    console.log("works")
    description.toggleClass('show');
    section.toggleClass('bigger_section')
       

});



// modal window
$(document).ready(function(){
    $("#myBtn3").click(function(){
        $("#myModal3").modal({backdrop: "static"});

    });
});

show.on('click', function (event) {
    console.log('event >')
  
    load();   
})

function insertPhoto( photos ) {
    console.log(photos)
    photos.forEach(function (element){
        var $a =  $(`<a href="${element.download_url}" class="${element.author}" data-fancybox="gallery" alt =${element.author}>
        <img src="${element.download_url}" class="gallery-img ${element.author}" alt =${element.author}/>
    </a>`)
   
        console.log($a)   
        console.log(gallery)
        gallery.append($a)
          
      });
   


// start modal window- settings
var current_imagies= $('#myModal3 div.galleryApi a');
$(current_imagies[index]).addClass('visible');

let current_class=($(current_imagies[index]).attr('class'));
console.log(current_class)
let current_one_class = current_class.slice(0, 19)
console.log(current_one_class)
let name_footer = $(".modal-footer div")
name_footer.text(current_one_class);

}

//ajax
function load() {
    $.ajax({
  url: apiUrl
  // method: 'GET'
    }).done(function (response) {
        insertPhoto(response)
       
    }).fail(function (error) {
        console.log(error)
    })
}





next.on('click', function(current_imagies ) {
    var current_imagies = $('#myModal3 div.galleryApi a');
    console.log(current_imagies)
    console.log("works >")
    console.log(index)
    
   $(current_imagies[index]).removeClass('visible');
   console.log(current_imagies);
   index++;
   console.log($(this).attr('class'));
   if(index >= current_imagies.length){
       index = 0;
   }
   let current_class=($(current_imagies[index]).attr('class'));
   console.log(current_class)
   let name_footer = $(".modal-footer div")
   name_footer.text(current_class);
   $(current_imagies[index]).addClass('visible');
   

     console.log($(this).attr('class'));

   
});

prev.on('click', function() {
    var current_imagies = $('#myModal3 div.galleryApi a');

    $(current_imagies[index]).removeClass('visible');
   index--;
   if(index < 0){
    index = current_imagies.length - 1;
   }
   let current_class=($(current_imagies[index]).attr('class'));
   console.log(current_class)
   let name_footer = $(".modal-footer div")
   name_footer.text(current_class);
   $(current_imagies[index]).addClass('visible');
});




// footer
let current_date = new Date()
let day=current_date.getDate();
let month=current_date.getMonth();
let year =current_date.getFullYear();
let hour = current_date.getHours();
let minutes= current_date.getMinutes();
date.text(day +"."+month+"."+year)
time.text(hour+":"+minutes)