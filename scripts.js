//Search Bar Toggle
function toggleSearch(){
            const searchBar = document.querySelector('.search-bar');
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')){
                searchBar.focus();
            }
        }
//Collapse Search Bar on Outside Click
        document.addEventListener('click', function(event){
            const searchContainer = document.querySelector('.search-container');
            const searchBar = document.querySelector('.search-bar');
            const searchIcon = document.querySelector('search-icon');
            if (!searchContainer.contains(event.target) && searchBar.classList.contains('active')){
                searchBar.classList.remove('active');
            }
        });

//Filter Properties by Lifestyle
        document.getElementById('lifestyle-filter').addEventListener('change', function(){
            const filterValue = this.value;
            const propertyCards = document.querySelectorAll('.property-card');
            propertyCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.lifestyle === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });

//Clear form after submission
        document.getElementById('contact-form').addEventListener('submit', function(event){
            event.preventDefault();
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            console.log('Contact form submission', data);
            this.reset();
        });

// Dropdown Toggle Function for View Details
function toggleDetails(propertyId) {
    const dropdown = document.getElementById(`dropdown-${propertyId}`);
    const isOpen = dropdown.classList.contains('active');

    // Close all dropdowns
    document.querySelectorAll('.details-dropdown').forEach(d => {
        d.classList.remove('active');
        d.style.maxHeight = '0';
    });

    // Toggle the clicked dropdown
    if (!isOpen) {
        dropdown.classList.add('active');
        dropdown.style.maxHeight = '300px';
    }
}
// Collapse Search Bar on Outside Click
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search-container');
    const searchBar = document.querySelector('.search-bar');
    if (!searchContainer.contains(event.target) && searchBar.classList.contains('active')) {
        searchBar.classList.remove('active');
    }
});









// Ensure modal is hidden on page load
        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('auth-modal');
            modal.classList.remove('active'); // Explicitly remove active class on load
        });

        function toggleSearch() {
            const searchBar = document.getElementById('search-input');
            searchBar.classList.toggle('active');
            if (searchBar.classList.contains('active')) {
                searchBar.focus();
            }
        }

        function toggleAuthModal() {
            const modal = document.getElementById('auth-modal');
            modal.classList.toggle('active');
        }

        function showTab(tabId) {
            document.querySelectorAll('.form-section').forEach(section => {
                section.classList.remove('active');
            });
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.getElementById(tabId).classList.add('active');
            document.querySelector(`button[onclick="showTab('${tabId}')"]`).classList.add('active');
        }
