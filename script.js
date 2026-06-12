// PASSWORD PROTECTION
const PASSWORD = 'family'; // Change this to your desired password
const passwordModal = document.getElementById('password-modal');
const mainContent = document.getElementById('main-content');
const passwordInput = document.getElementById('password-input');
const passwordSubmit = document.getElementById('password-submit');
const passwordError = document.getElementById('password-error');
 
// Check if user already entered password this session
function checkPasswordSession() {
    if (!sessionStorage.getItem('gallery_unlocked')) {
        mainContent.classList.add('hidden');
        passwordModal.classList.remove('hidden');
    } else {
        mainContent.classList.remove('hidden');
        passwordModal.classList.add('hidden');
    }
}
 
// Handle password submission
function handlePasswordSubmit() {
    const input = passwordInput.value.trim();
    if (input === PASSWORD) {
        sessionStorage.setItem('gallery_unlocked', 'true');
        passwordError.textContent = '';
        passwordInput.value = '';
        mainContent.classList.remove('hidden');
        passwordModal.classList.add('hidden');
    } else {
        passwordError.textContent = 'Incorrect password. Please try again.';
        passwordInput.value = '';
        passwordInput.focus();
    }
}
 
passwordSubmit.addEventListener('click', handlePasswordSubmit);
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handlePasswordSubmit();
    }
});

// Set dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Album data with placeholder images
const albums = {
    'Disney Magic (March, 2025)': {
        metadata: {
            timeOfYear: 'March 2025',
            destination: 'Catalina, Mexico',
            type: 'Family Disney Magic Cruise',
            description: 'A magical cruise adventure with Disney characters and family fun.'
        },
        photos: [
            { 
                src: 'images/Disney Magic (March, 2025)/family(4).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(4).jpeg', 
                caption: 'Depart', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(20).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(20).jpeg', 
                caption: 'Mickey Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(21).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(21).jpeg', 
                caption: 'Mickey Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(1).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/char(1).jpg', 
                caption: 'Minnie Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(3).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(3).jpeg', 
                caption: 'Minnie Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(4).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(4).jpeg', 
                caption: 'Minnie Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(8).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(8).jpeg', 
                caption: 'Minnie Mouse big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(28).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(28).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(30).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(30).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(2).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(2).jpeg', 
                caption: 'Goofy big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(26).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(26).jpeg', 
                caption: 'Goofy big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char.jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char.jpeg', 
                caption: 'Goofy big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(2).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/char(2).jpg', 
                caption: 'Donald Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(16).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(16).jpeg', 
                caption: 'Donald Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(17).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(17).jpeg', 
                caption: 'Donald Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(9).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/char(9).jpg', 
                caption: 'Daisy Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(13).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(13).jpeg', 
                caption: 'Chip and Dale big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(14).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(14).jpeg', 
                caption: 'Chip and Dale big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(23).jpeg',
                thumb: 'images/Disney Magic (March, 2025)/char(23).jpeg', 
                caption: 'Tiana small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(24).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(24).jpeg', 
                caption: 'Tiana small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(9).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(9).jpeg', 
                caption: 'Ariel small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(10).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(10).jpeg', 
                caption: ' Belle small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(11).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(11).jpeg', 
                caption: ' Belle small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(31).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(31).jpeg', 
                caption: 'Black Panther small family photo', 
                tags: ['character', 'Marvel Superheroes', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(2).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(2).jpeg', 
                caption: 'Big family photo at the Sail-a-wave Party', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(5).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(5).jpeg', 
                caption: 'Big family photo before we boarded the Disney Wonder', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family.jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family.jpeg', 
                caption: 'Small family photo at the Sail-a-wave Party', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(1).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(1).jpeg', 
                caption: 'Small family photo at the Sail-a-wave Party', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(3).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(3).jpeg', 
                caption: 'Small family photo at the Sail-a-wave Party', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(4).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/family(4).jpg', 
                caption: 'Small family photo', 
                tags: ['cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(5).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/family(5).jpg', 
                caption: 'Small family photo at the Walt Disney Theater', 
                tags: ['cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(6).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(6).jpeg', 
                caption: 'Small family photo at dinner (Tritons)', 
                tags: ['Dinner', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(9).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(9).jpeg', 
                caption: 'Big family photo at dinner (Animators Palate)', 
                tags: ['Dinner', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(7).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(7).jpeg', 
                caption: 'Small family photo at dinner (Animators Palate)', 
                tags: ['Dinner', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/Family(13).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/Family(13).jpg', 
                caption: 'Big family photo on a mountain', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/mexico(1).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/mexico(1).jpg', 
                caption: 'Big family photo on Catalina Island', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/ship(4).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/ship(4).jpg', 
                caption: 'Big family photo with the Disney Wonder in the background', 
                tags: ['Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/staff.jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/staff.jpeg', 
                caption: 'Big family at Animators Palate', 
                tags: ['Staff', 'Dinner', 'Family Photo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/mexico(3).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/mexico(3).jpg', 
                caption: 'Ensenada', 
                tags: ['Mexico', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(8).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/family(8).jpg', 
                caption: 'Dramatic photo', 
                tags: ['Solo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(6).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/family(6).jpg', 
                caption: 'Dramatic photo', 
                tags: ['Solo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(7).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/family(7).jpg', 
                caption: 'Dramatic photo', 
                tags: ['Solo', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/room.jpg', 
                thumb: 'images/Disney Magic (March, 2025)/room.jpg', 
                caption: 'Disney Wonder Room (March 2024)', 
                tags: ['Room', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/ship(2).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/ship(2).jpg', 
                caption: 'Disney Wonder', 
                tags: ['Ship', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/ship(3).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/ship(3).jpg', 
                caption: 'Disney Wonder Walt Disney Theater', 
                tags: ['Ship', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/staff(3).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/staff(3).jpg', 
                caption: 'Energy, Energy', 
                tags: ['Staff', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/staff.jpg', 
                thumb: 'images/Disney Magic (March, 2025)/staff.jpg', 
                caption: 'Concierge Lounge', 
                tags: ['Staff', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char.jpg', 
                thumb: 'images/Disney Magic (March, 2025)/char.jpg', 
                caption: 'Mickey Mouse on the stairs', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(5).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(5).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(5).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/char(5).jpg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(6).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(6).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(6).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/char(6).jpg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(7).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(7).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(29).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(29).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(32).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(32).jpeg', 
                caption: 'Minnie Mouse small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(1).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(1).jpeg', 
                caption: 'Goofy small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(27).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(27).jpeg', 
                caption: 'Goofy big family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(3).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/char(3).jpg', 
                caption: 'Donald Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(18).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(18).jpeg', 
                caption: 'Donald Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(10).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/char(10).jpg', 
                caption: 'Daisy Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(11).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/char(11).jpg', 
                caption: 'Daisy Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(12).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/char(12).jpg', 
                caption: 'Daisy Duck small family photo', 
                tags: ['character', 'Mickey Mouse Clubhouse', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(4).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/char(4).jpg', 
                caption: 'Tiana walking down the stairs', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(15).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(15).jpeg', 
                caption: 'Cinderella small family photo', 
                tags: ['character', 'Disney Princesses', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(12).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(12).jpeg', 
                caption: 'Black Panther small family photo', 
                tags: ['character', 'Marvel Superheroes', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(22).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(22).jpeg', 
                caption: 'Spider-Man small family photo', 
                tags: ['character', 'Marvel Superheroes', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/char(25).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/char(25).jpeg', 
                caption: 'Small family photo with a pirate backdrop', 
                tags: ['Pirate Night', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(3).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/family(3).jpg', 
                caption: 'Small family photo', 
                tags: ['cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(8).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(8).jpeg', 
                caption: 'Small family photo at dinner (Animators Palate)', 
                tags: ['Dinner', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(10).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(10).jpeg', 
                caption: 'Small family photo with a pirate backdrop', 
                tags: ['Pirate Night', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(11).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(11).jpeg', 
                caption: 'Small family photo with a pirate backdrop', 
                tags: ['Pirate Night', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(12).jpeg', 
                thumb: 'images/Disney Magic (March, 2025)/family(12).jpeg', 
                caption: 'Small family photo with a pirate backdrop', 
                tags: ['Pirate Night', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family(11).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/family(11).jpg', 
                caption: 'Small family photo on the ship', 
                tags: ['cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/mexico(4).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/mexico(4).jpg', 
                caption: 'Port of Ensenada', 
                tags: ['Mexico', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/mexico(2).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/mexico(2).jpg', 
                caption: 'Catalina Island', 
                tags: ['Catalina', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/family.jpg', 
                thumb: 'images/Disney Magic (March, 2025)/family.jpg', 
                caption: 'Family walking to the car with our suitcases', 
                tags: ['Travel Fun', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/food(1).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/food(1).jpg', 
                caption: 'An Olaf coffee', 
                tags: ['Food', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/food(2).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/food(2).jpg', 
                caption: 'A Mickey coffee', 
                tags: ['Food', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/food.jpg', 
                thumb: 'images/Disney Magic (March, 2025)/food.jpg', 
                caption: 'An Elsa coffee', 
                tags: ['Food', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/food(5).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/food(5).jpg', 
                caption: 'Chocolate sundae', 
                tags: ['Food', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/ship.jpg', 
                thumb: 'images/Disney Magic (March, 2025)/ship.jpg', 
                caption: 'Disney Wonder Ariel statue', 
                tags: ['Ship', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/ship(1).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/ship(1).jpg', 
                caption: 'Disney Wonder', 
                tags: ['Ship', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/staff(4).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/staff(4).jpg', 
                caption: 'Staff photo', 
                tags: ['Staff', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/staff(5).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/staff(5).jpg', 
                caption: 'Camera man', 
                tags: ['Staff', 'cruise'] 
            },
            { 
                src: 'images/Disney Magic (March, 2025)/staff(6).jpg', 
                thumb: 'images/Disney Magic (March, 2025)/staff(6).jpg', 
                caption: 'Pin Trading', 
                tags: ['Staff', 'cruise'] 
            }
        ]
    },
};

// Global variables
let selectedTags = [];
let currentPhotos = [];
let currentIndex = 0;
let currentAlbumId = null;

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('href').substring(1);
        switchPage(pageId);
    });
});

function switchPage(pageId) {
    pages.forEach(page => page.classList.remove('active'));
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    if (pageId === 'home') {
        renderHomeAlbums();
    } else if (pageId === 'albums') {
        renderAlbumsPage();
    }
}

// Render albums on home page
function renderHomeAlbums() {
    const grid = document.getElementById('home-albums-grid');
    grid.innerHTML = '';

    Object.keys(albums).slice(0, 3).forEach(albumId => {
        const album = albums[albumId];
        const firstPhoto = album.photos[0];

        const card = document.createElement('div');
        card.className = 'album-card';
        card.innerHTML = `
            <img src="${firstPhoto.thumb}" alt="${albumId}">
            <div class="album-title">${albumId}</div>
        `;
        card.addEventListener('click', () => {
            openAlbum(albumId);
            switchPage('gallery');
        });
        grid.appendChild(card);
    });

    // Set random hero image
    if (albums['Disney Magic (March, 2025)'].photos.length > 0) {
        const randomIndex = Math.floor(Math.random() * albums['Disney Magic (March, 2025)'].photos.length);
        const heroImage = document.getElementById('hero-image');
        heroImage.src = albums['Disney Magic (March, 2025)'].photos[randomIndex].src;
    }
}

// Render all albums on albums page
function renderAlbumsPage() {
    const grid = document.getElementById('albums-page-grid');
    grid.innerHTML = '';

    Object.keys(albums).forEach(albumId => {
        const album = albums[albumId];
        const firstPhoto = album.photos[0];

        const card = document.createElement('div');
        card.className = 'album-card';
        card.innerHTML = `
            <img src="${firstPhoto.thumb}" alt="${albumId}">
            <div class="album-title">${albumId}</div>
        `;
        card.addEventListener('click', () => {
            openAlbum(albumId);
            switchPage('gallery');
        });
        grid.appendChild(card);
    });
}

// Open album
function openAlbum(albumId) {
    currentAlbumId = albumId;
    selectedTags = [];
    const gallery = document.getElementById('photo-gallery');
    const title = document.getElementById('gallery-title');
    title.textContent = albumId;
    gallery.innerHTML = '<p>Loading...</p>';

    // Populate album info
    const albumInfo = document.getElementById('album-info');
    const metadata = albums[albumId].metadata || {};
    albumInfo.innerHTML = `
        <p><strong>Time of Year:</strong> ${metadata.timeOfYear || 'N/A'}</p>
        <p><strong>Destination:</strong> ${metadata.destination || 'N/A'}</p>
        <p><strong>Type:</strong> ${metadata.type || 'N/A'}</p>
        <p><strong>Description:</strong> ${metadata.description || 'No description available.'}</p>
    `;

    // Collect unique tags for the album
    const allTags = new Set();
    albums[albumId].photos.forEach(photo => {
        if (photo.tags) {
            photo.tags.forEach(tag => allTags.add(tag));
        }
    });

    // Render filter buttons
    const tagFilters = document.getElementById('tag-filters');
    tagFilters.innerHTML = '';
    allTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'tag-button';
        button.textContent = tag;
        button.dataset.tag = tag;
        button.addEventListener('click', () => toggleTagFilter(tag, albumId));
        tagFilters.appendChild(button);
    });

    // Render gallery
    renderGallery(albumId);
}

// Toggle tag filter
function toggleTagFilter(tag, albumId) {
    if (selectedTags.includes(tag)) {
        selectedTags = selectedTags.filter(t => t !== tag);
    } else {
        selectedTags.push(tag);
    }
    updateTagButtonStyles();
    renderGallery(albumId);
}

// Clear all filters
function clearFilters(albumId) {
    selectedTags = [];
    updateTagButtonStyles();
    renderGallery(albumId);
}

// Update tag button styles based on selection
function updateTagButtonStyles() {
    const tagButtons = document.querySelectorAll('.tag-button');
    tagButtons.forEach(button => {
        if (selectedTags.includes(button.dataset.tag)) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Render gallery with filtered photos
function renderGallery(albumId) {
    const gallery = document.getElementById('photo-gallery');
    gallery.innerHTML = '';
    console.log(`Rendering gallery for album: ${albumId}`);

    // Filter photos based on selected tags
    let filteredPhotos = albums[albumId].photos.filter(photo => {
        if (!photo.src || !photo.thumb) {
            console.warn(`Skipping invalid photo entry:`, photo);
            return false;
        }
        return true;
    });

    if (selectedTags.length > 0) {
        filteredPhotos = filteredPhotos.filter(photo =>
            selectedTags.every(tag => photo.tags && photo.tags.includes(tag))
        );
    }

    if (filteredPhotos.length === 0) {
        gallery.innerHTML = '<p>No photos match the selected tags.</p>';
        console.log('No photos to render after filtering');
        return;
    }

    // Store photos for lightbox navigation
    currentPhotos = filteredPhotos;
    console.log(`Rendering ${filteredPhotos.length} photos`);

    filteredPhotos.forEach((photo, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'gallery-image-container';
        const img = document.createElement('img');
        img.src = photo.thumb;
        img.alt = photo.caption;
        img.dataset.index = index;
        img.className = 'gallery-image';
        img.loading = 'lazy';
        img.addEventListener('click', () => {
            console.log(`Image clicked, index: ${index}, src: ${photo.thumb}`);
            openLightbox(index);
        });
        imgContainer.appendChild(img);
        gallery.appendChild(imgContainer);
        console.log(`Rendered image: ${photo.thumb}`);
    });
}

// Custom Lightbox Functions
const lightbox = document.getElementById('custom-lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');
const lightboxDownloadButton = document.getElementById('lightbox-download-button');

function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    console.log(`Lightbox opened at index: ${index}`);
}

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = '';
    console.log('Lightbox closed');
}

function updateLightbox() {
    const photo = currentPhotos[currentIndex];
    lightboxImage.src = photo.src;
    lightboxImage.alt = photo.caption;
    lightboxCaption.textContent = photo.caption;
    lightboxPrev.style.display = currentIndex > 0 ? 'block' : 'none';
    lightboxNext.style.display = currentIndex < currentPhotos.length - 1 ? 'block' : 'none';
    console.log(`Lightbox updated: ${photo.src}`);
}

// Lightbox event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
lightboxPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateLightbox();
    }
});
lightboxNext.addEventListener('click', () => {
    if (currentIndex < currentPhotos.length - 1) {
        currentIndex++;
        updateLightbox();
    }
});

// Clear filters button listener
document.getElementById('clear-filters').addEventListener('click', () => {
    if (currentAlbumId) clearFilters(currentAlbumId);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            updateLightbox();
        } else if (e.key === 'ArrowRight' && currentIndex < currentPhotos.length - 1) {
            currentIndex++;
            updateLightbox();
        } else if (e.key === 'Escape') {
            closeLightbox();
        }
    }
});

// DOWNLOAD FUNCTIONALITY
const downloadModal = document.getElementById('download-modal');
const modalClose = document.querySelector('.modal-close');
const formatButtons = document.querySelectorAll('.format-button');
const downloadAllButton = document.getElementById('download-all-button');

// Close modal
modalClose.addEventListener('click', () => {
    downloadModal.style.display = 'none';
});

downloadModal.addEventListener('click', (e) => {
    if (e.target === downloadModal) {
        downloadModal.style.display = 'none';
    }
});

// Handle single photo download
lightboxDownloadButton.addEventListener('click', () => {
    downloadModal.style.display = 'flex';
});

// Handle format selection for single photo
formatButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const format = button.dataset.format;
        const photo = currentPhotos[currentIndex];
        downloadModal.style.display = 'none';
        
        if (format === 'jpeg') {
            downloadImage(photo.src, photo.caption);
        } else if (format === 'pdf') {
            downloadImageAsPDF(photo.src, photo.caption);
        }
    });
});

// Download single image as JPEG
function downloadImage(src, filename) {
    const link = document.createElement('a');
    link.href = src;
    link.download = `${filename.replace(/\s+/g, '_') || 'photo'}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Download single image as PDF
async function downloadImageAsPDF(src, filename) {
    try {
        const response = await fetch(src);
        const blob = await response.blob();
        const img = new Image();
        img.onload = () => {
            const pdf = new window.jsPDF.jsPDF({
                orientation: img.width > img.height ? 'landscape' : 'portrait',
                unit: 'mm',
                format: [img.width, img.height]
            });
            
            const reader = new FileReader();
            reader.onload = () => {
                pdf.addImage(reader.result, 'JPEG', 0, 0, img.width, img.height);
                pdf.save(`${filename.replace(/\s+/g, '_') || 'photo'}.pdf`);
            };
            reader.readAsDataURL(blob);
        };
        img.src = URL.createObjectURL(blob);
    } catch (error) {
        console.error('Error downloading PDF:', error);
        alert('Error downloading PDF. Please try again.');
    }
}

// Download all photos in current album as ZIP
downloadAllButton.addEventListener('click', async () => {
    if (!currentAlbumId || currentPhotos.length === 0) {
        alert('No photos to download.');
        return;
    }

    downloadAllButton.disabled = true;
    downloadAllButton.textContent = '⬇ Downloading...';

    try {
        const zip = new JSZip();
        
        for (let i = 0; i < currentPhotos.length; i++) {
            const photo = currentPhotos[i];
            const photoName = photo.caption.replace(/\s+/g, '_') || `photo_${i + 1}`;
            
            try {
                const response = await fetch(photo.src);
                const blob = await response.blob();
                
                // Get file extension from src or use jpg as default
                const ext = photo.src.split('.').pop().toLowerCase();
                const validExts = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
                const fileExt = validExts.includes(ext) ? ext : 'jpg';
                
                zip.file(`${photoName}.${fileExt}`, blob);
            } catch (error) {
                console.error(`Error fetching photo ${i + 1}:`, error);
            }
        }

        const zipBlob = await zip.generateAsync({ type: 'blob' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(zipBlob);
        link.download = `${currentAlbumId.replace(/\s+/g, '_')}_photos.zip`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

    } catch (error) {
        console.error('Error creating ZIP file:', error);
        alert('Error downloading photos. Please try again.');
    } finally {
        downloadAllButton.disabled = false;
        downloadAllButton.textContent = '⬇ Download All';
    }
});

// Initialize
renderHomeAlbums();
