$(function() {
  var lastScrollTop = 0;
  var $navbar = $('.navbar');
  var navbarHeight = $navbar.outerHeight();
  var movement = 0;
  var lastDirection = 0;

  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    movement += st - lastScrollTop;

    if (st > lastScrollTop) {
      // scroll down
      if (lastDirection != 1) {
        movement = 0;
      }
      var margin = Math.abs(movement);
      if (margin > navbarHeight) {
        margin = navbarHeight;
      }
      margin = -margin;
      $navbar.css('margin-top', margin + 'px');

      lastDirection = 1;
    } else {
      // scroll up
      if (lastDirection != -1) {
        movement = 0;
      }
      var margin = Math.abs(movement);
      if (margin > navbarHeight) {
        margin = navbarHeight;
      }
      margin = margin - navbarHeight;
      $navbar.css('margin-top', margin + 'px');

      lastDirection = -1;
    }

    lastScrollTop = st;
    // console.log(margin);
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 675) {
      $('#scroll-nav').css('background', '#011627');
      $('#scroll-nav').css('box-shadow', '1px 4px 15px 0px rgba(0,0,0,0.6)');
    } else {
      $('#scroll-nav').css('background', 'transparent');
      $('#scroll-nav').css('box-shadow', 'none');
    }
  });
});

(function() {
  scrollTo();
})();

function scrollTo() {
  const links = document.querySelectorAll('.scroll');
  links.forEach(each => (each.onclick = scrollAnchors));
}

function scrollAnchors(e, respond = null) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
  e.preventDefault();
  var targetID = respond
    ? respond.getAttribute('href')
    : this.getAttribute('href');

  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);
  window.scrollBy({ top: originalTop, left: 0, behavior: 'smooth' });
  const checkIfDone = setInterval(function() {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;

    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = '-1';
      targetAnchor.focus();
      window.history.pushState('', '', targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

const svgName = document.querySelectorAll('#andrew-vargas path');

for (let i = 0; i < svgName.length; i++) {
  console.log(`Letter ${i} is ${svgName[i].getTotalLength()}`);
}

function scrollAppear(className, descriptionClass) {
  const featuredProject = document.querySelector(className);
  const projectDescription = document.querySelector(descriptionClass);
  let introPosition = featuredProject.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.3;

  if (introPosition < screenPosition) {
    featuredProject.classList.add('featured-project-scroll');
    projectDescription.classList.add('project-description-appear');
  } else if (screenPosition < introPosition) {
    featuredProject.classList.remove('featured-project-scroll');
    projectDescription.classList.remove('project-description-appear');
  }
}

window.addEventListener('scroll', function() {
  scrollAppear('.project-scroll1', '.scrollBy1');
});

window.addEventListener('scroll', function() {
  scrollAppear('.project-scroll2', '.scrollBy2');
});

window.addEventListener('scroll', function() {
  scrollAppear('.project-scroll3', '.scrollBy3');
});
