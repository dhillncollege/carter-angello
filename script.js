

const path = window.location.pathname;

if (path.endsWith("index.html") || path === "/" || path === "/index") {
  console.log("Running index.html script");
  
  var myIndex = 0;
  carousel();
  
  function carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex -1].style.display = "block"
      setTimeout(carousel, 3000);
  }
  
  function autoResize(textarea) {
      textarea.style.height = 'auto'
      textarea.style.height = (textarea.scrollHeight) + 'px';
  }
}

if (path.endsWith("event.html") || path === "/" || path === "/index") {
    console.log("Running event.html script");
    
    const eventCards = document.querySelectorAll(".event-card");

            eventCards.forEach(function (eventcard) {
                eventcard.addEventListener("click", () => {
                    const url = eventcard.getAttribute('alt');
                    window.open(url);
                    console.log(url);
                });
            });
}

if (path.endsWith("shop.html") || path === "/" || path === "/index") {
    console.log("Running shop.html script");
    document.addEventListener("DOMContentLoaded", function() {

        var modal = document.getElementById("imageModal");

        var modalImg = document.getElementById("modalImage");
        var captionText = document.getElementById("caption");

        var closeModal = document.getElementById("closeModal");

        var modalButton = document.getElementById("modalButton");

        var thumbnails = document.querySelectorAll(".thumbnail");

        thumbnails.forEach(function (thumbnail) {
            thumbnail.onclick = function() {
                modal.style.display = "block";
                modalImg.src = this.src.replace('-thumbnail', '');
                captionText.innerHTML = this.alt;
            };
        });

        closeModal.onclick = function() {
            modal.style.display = "none";
        }

        modalButton.onclick = function() {
            alert("Added to cart.");
        }
    })
}

if (path.endsWith("contact.html") || path === "/" || path === "/index") {
    console.log("Running contact.html script");

    function instagram() {
        window.open("https://www.instagram.com");
    }

    function facebook() {
        window.open("https://www.facebook.com");
    }

    function youtube() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1");
    }
}

function youtube() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&autoplay=1");
}