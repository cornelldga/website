$(document).ready(function() {
    $('#background-image').css({
        'background': 'url("https://wallpaperaccess.com/full/3402719.png")',
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
        'background-attachment': 'fixed'
    });

    // Hide the door and the "Enter?" text as they are not needed
    $('.door').hide();
    $('.typing-demo').hide();
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.nav-burger');
    const navbarMenu = document.querySelector('.nav-wrapper');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    });
});


// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
    const csUL = document.querySelector('#burgerexpand');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#navbar .cs-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
        item.classList.toggle('cs-active');
    };
    item.addEventListener('click', onClick);
}







// $(document).ready(function() {
//     var doorClicked = sessionStorage.getItem('doorClicked');

//     function setAppropriateBackground() {
//         $('#background-image').css({
//             'background': 'url("https://wallpaperaccess.com/full/3402719.png")',
//             'background-size': 'cover',
//             'background-position': 'center',
//             'background-repeat': 'no-repeat',
//             'background-attachment': 'fixed'
//         });
//     }
//     // If the door has not been clicked, set the initial background and hide the door section
//     if (!doorClicked) {
//         $('#background-image').css('background', '#000'); // All black background
//         $('.hidehero').hide();
//         $('.hidehero2').show();
//     } else {
//         setAppropriateBackground();
//         $('.hidehero2').css('opacity', 0).hide();
//         $('.hidehero').css({
//             'animation': 'fadeIn 1s ease-in-out forwards',
//             'display': 'block'
//         });
//     }

//     // On click of the door, hide the door section and show the content section with a smooth transition
//     $('.door').on('click', function() {
//         sessionStorage.setItem('doorClicked', true);
//         setAppropriateBackground();

//         $('.hidehero2').css({
//             animation: 'fadeOut 1s ease-in-out forwards',
//         });

//         // Apply fade-out animation after a delay of 1 second
//         setTimeout(function() {
//             $('.hidehero2').hide();
//         }, 1000);

//         // Apply fade-out animation after a delay of 2 second
//         setTimeout(function() {
//             $('.hidehero').css({
//                 animation: 'fadeIn 1s ease-in-out forwards',
//                 display: 'block',
//             });
//         }, 1000);

//     });
// });


// $(document).ready(function() {
//     $('#background-image').css({
//         'background': 'url("https://wallpaperaccess.com/full/3402719.png")',
//         'background-size': 'cover',
//         'background-position': 'center',
//         'background-repeat': 'no-repeat',
//         'background-attachment': 'fixed'
//     });

// });



// $(document).ready(function() {
//     var doorClicked = sessionStorage.getItem('doorClicked');
//     var modalDisplayed = sessionStorage.getItem('modalDisplayed');

//     function setAppropriateBackground() {
//         $('#background-image').css({
//             'background': 'url("https://wallpaperaccess.com/full/3402719.png")',
//             'background-size': 'cover',
//             'background-position': 'center',
//             'background-repeat': 'no-repeat',
//             'background-attachment': 'fixed'
//         });
//     }

//     // If the door has not been clicked, set the initial background and hide the door section
//     if (!doorClicked) {
//         $('#background-image').css('background', '#000'); // All black background
//         $('.hidehero').hide();
//         $('.hidehero2').show();
//     } else {
//         setAppropriateBackground();
//         $('.hidehero2').css('opacity', 0).hide();
//         $('.hidehero').css({
//             'animation': 'fadeIn 1s ease-in-out forwards',
//             'display': 'block'
//         });

//         // Check if the modal has not been displayed in the current session
//         if (!modalDisplayed) {
//             // Display modal after a delay of 3 seconds
//             setTimeout(function() {
//                 modalMenu.classList.add('show');
//                 overlay.style.display = 'block'; // Show overlay
//                 sessionStorage.setItem('modalDisplayed', true);
//             }, 3000);
//         }
//     }

//     // On click of the door, hide the door section and show the content section with a smooth transition
//     $('.door').on('click', function() {
//         sessionStorage.setItem('doorClicked', true);
//         setAppropriateBackground();

//         $('.hidehero2').css({
//             'animation': 'fadeOut 1s ease-in-out forwards',
//         });

//         // Apply fade-out animation after a delay of 1 second
//         setTimeout(function() {
//             $('.hidehero2').hide();
//         }, 1000);

//         // Apply fade-out animation after a delay of 2 seconds
//         setTimeout(function() {
//             $('.hidehero').css({
//                 'animation': 'fadeIn 1s ease-in-out forwards',
//                 'display': 'block',
//             });
//         }, 1000);

//         // Check if the modal has not been displayed in the current session
//         if (!modalDisplayed) {
//             // Display modal after a delay of 3 seconds
//             setTimeout(function() {
//                 modalMenu.classList.add('show');
//                 overlay.style.display = 'block'; // Show overlay
//                 sessionStorage.setItem('modalDisplayed', true);
//             }, 5000);
//         }
//     });
// });

// const closeBtn = document.getElementById('close');
// const modalMenu = document.getElementById('modal');
// const modalBtn = document.querySelector('.modalbutton');
// const overlay = document.getElementById('overlay');

// closeBtn.addEventListener('click', () => {
//     modalMenu.classList.remove('show');
//     overlay.style.display = 'none'; // Hide overlay
// });

// modalBtn.addEventListener('click', () => {
//     modalMenu.classList.remove('show');
//     overlay.style.display = 'none'; // Hide overlay
// });


// $(document).ready(function() {
//     var doorClicked = sessionStorage.getItem('doorClicked');
//     var modalDisplayed = sessionStorage.getItem('modalDisplayed');

//     function setAppropriateBackground() {
//         $('#background-image').css({
//             'background': 'url("https://wallpaperaccess.com/full/3402719.png")',
//             'background-size': 'cover',
//             'background-position': 'center',
//             'background-repeat': 'no-repeat',
//             'background-attachment': 'fixed'
//         });
//     }

//     // If the door has not been clicked, set the initial background and hide the door section
//     if (!doorClicked) {
//         $('#background-image').css('background', '#000'); // All black background
//         $('.hidehero').hide();
//         $('.hidehero2').show();
//     } else {
//         setAppropriateBackground();
//         $('.hidehero2').css('opacity', 0).hide();
//         $('.hidehero').css({
//             'animation': 'fadeIn 1s ease-in-out forwards',
//             'display': 'block'
//         });

//         // Check if the modal has not been displayed in the current session
//         if (!modalDisplayed) {
//             // Display modal after a delay of 3 seconds
//             setTimeout(function() {
//                 modalMenu.classList.add('show');
//                 overlay.style.display = 'block'; // Show overlay
//                 sessionStorage.setItem('modalDisplayed', true);
//             }, 3000);
//         }
//     }

//     // On click of the door, hide the door section and show the content section with a smooth transition
//     $('.door').on('click', function() {
//         sessionStorage.setItem('doorClicked', true);
//         setAppropriateBackground();

//         $('.hidehero2').css({
//             'animation': 'fadeOut 1s ease-in-out forwards',
//         });

//         // Apply fade-out animation after a delay of 1 second
//         setTimeout(function() {
//             $('.hidehero2').hide();
//         }, 1000);

//         // Apply fade-out animation after a delay of 2 seconds
//         setTimeout(function() {
//             $('.hidehero').css({
//                 'animation': 'fadeIn 1s ease-in-out forwards',
//                 'display': 'block',
//             });
//         }, 1000);

//         // Check if the modal has not been displayed in the current session
//         if (!modalDisplayed) {
//             // Display modal after a delay of 3 seconds
//             setTimeout(function() {
//                 modalMenu.classList.add('show');
//                 overlay.style.display = 'block'; // Show overlay
//                 sessionStorage.setItem('modalDisplayed', true);
//             }, 5000);
//         }
//     });
// });

// const closeBtn = document.getElementById('close');
// const modalMenu = document.getElementById('modal');
// const modalBtn = document.querySelector('.modalbutton');
// const overlay = document.getElementById('overlay');

// closeBtn.addEventListener('click', () => {
//     modalMenu.classList.remove('show');
//     overlay.style.display = 'none'; // Hide overlay
// });

// modalBtn.addEventListener('click', () => {
//     modalMenu.classList.remove('show');
//     overlay.style.display = 'none'; // Hide overlay
// });


document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.dgaherotxt span');
    const colors = [
        '#d00000', '#dc2f02', '#e85d04', '#ffba08', '#2ec4b6', 
        '#6fffe9', '#ff206e', '#16db65', '#2ba84a', '#30c5ff', 
        '#89fc00', '#cc00ff', '#ff1791', '#8f00ff', '#124de2'
    ];
    const animationDelays = [0.2, 0.4, 0.7, 0.9];
    let recentColors = [];

    spans.forEach(span => {
        let colorIndex = Math.floor(Math.random() * colors.length);

        // Ensure the new color is not in the last three used
        while (recentColors.includes(colors[colorIndex])) {
            colorIndex = Math.floor(Math.random() * colors.length);
        }

        // Add the new color to the recent colors list
        recentColors.push(colors[colorIndex]);
        if (recentColors.length > 3) {
            recentColors.shift(); // Remove the oldest color if we have more than three
        }

        span.style.color = colors[colorIndex];
        const shadowColor = colors[colorIndex].replace('#', '');
        span.style.textShadow = `2px 2px 5px #${shadowColor.substring(0, shadowColor.length - 1)}3`;

        const delayIndex = Math.floor(Math.random() * animationDelays.length);
        span.style.animationDelay = `${animationDelays[delayIndex]}s`;
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var overlay = document.getElementById('overlay');
    var modalMenu = document.querySelector('.modal');
    var closeBtn = document.getElementById('close');
    var modalDisplayed = sessionStorage.getItem('modalDisplayed');
    var isModalClosed = false; // Flag to track if the modal has been closed

    function handleModalDisplay() {
        if (window.innerWidth > 600) {
            if (!modalDisplayed && !isModalClosed) {
                setTimeout(function() {
                    modalMenu.classList.add('show');
                    overlay.style.display = 'block'; // Show overlay
                    sessionStorage.setItem('modalDisplayed', 'true');
                }, 3000);
            }
        } else {
            // For smaller screens, always ensure the modal and overlay are correctly displayed
            if (!isModalClosed) {
                modalMenu.style.display = 'block';
                overlay.style.display = 'block';
            }
        }
    }

    if (closeBtn && modalMenu && overlay) {
        closeBtn.addEventListener('click', function() {
            modalMenu.style.display = 'none'; // Hide modal
            overlay.style.display = 'none'; // Hide overlay
            isModalClosed = true; // Set the flag to true when the modal is closed
        });

        var modalBtn = document.querySelector('.modalbutton');
        if (modalBtn) {
            modalBtn.addEventListener('click', function() {
                modalMenu.style.display = 'block'; // Show modal
                overlay.style.display = 'block'; // Show overlay
                isModalClosed = false; // Reset the flag when the modal is opened
            });
        }
    }

    handleModalDisplay(); // Run initially

    window.addEventListener('resize', function() {
        handleModalDisplay(); // Check and apply modal behavior again if the window is resized
    });
});


function toggleNavMenu() {
    var element = document.querySelector('.navbar-container');
    var navWrapper = document.querySelector('.nav-wrapper');
    var icon = document.querySelector('.icon i');

    element.classList.toggle('responsive');

    if (element.classList.contains('responsive')) {
        navWrapper.style.display = 'block'; // Show the expanded menu
        document.body.style.overflow = 'hidden'; // Disable scrolling on the body
    } else {
        navWrapper.style.display = 'none'; // Hide the expanded menu
        document.body.style.overflow = 'auto'; // Enable scrolling on the body
    }

    // Toggle class or content of icon to change it to 'x'
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times'); // Assuming you're using FontAwesome for the 'x' icon
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}


document.querySelector('.highlight').addEventListener('mouseover', function() {
    document.querySelector('.hover-image').style.display = 'block'; // Shows the image
});

document.querySelector('.highlight').addEventListener('mouseout', function() {
    document.querySelector('.hover-image').style.display = 'none'; // Hides the image
});
