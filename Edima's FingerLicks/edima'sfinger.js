
        // This are the meals data
        const meals = [
            {
                id: 1,
                name: "Grilled Salmon Steak",
                description: "Fresh Atlantic salmon grilled to perfection with lemon butter sauce and seasonal vegetables.",
                price: 24.99,
                category: "main",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                tags: ["Seafood", "Healthy", "Grilled"]
            },
            {
                id: 2,
                name: "Truffle Mushroom Risotto",
                description: "Creamy Arborio rice with wild mushrooms, white truffle oil, and parmesan cheese.",
                price: 19.99,
                category: "main",
                image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                tags: ["Vegetarian", "Italian", "Gourmet"]
            },
            {
                id: 3,
                name: "Beef Wellington",
                description: "Premium beef tenderloin wrapped in puff pastry with mushroom duxelles and prosciutto.",
                price: 32.99,
                category: "main",
                image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                tags: ["Premium", "British", "Specialty"]
            },
            {
                id: 4,
                name: "Caesar Salad",
                description: "Crisp romaine lettuce with Caesar dressing, parmesan cheese, croutons, and grilled chicken.",
                price: 14.99,
                category: "appetizer",
                image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                tags: ["Salad", "Chicken", "Fresh"]
            },
            {
                id: 5,
                name: "Bruschetta Trio",
                description: "Toasted bread topped with tomato basil, mushroom, and roasted pepper spreads.",
                price: 12.99,
                category: "appetizer",
                image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
                tags: ["Italian", "Vegetarian", "Shareable"]
            },
            {
                id: 6,
                name: "Chocolate Lava Cake",
                description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
                price: 9.99,
                category: "dessert",
                image: "https://images.unsplash.com/photo-1624353365286-3f8d62dadadf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
                tags: ["Chocolate", "Sweet", "Warm"]
            },
            {
                id: 7,
                name: "Tiramisu",
                description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
                price: 8.99,
                category: "dessert",
                image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                tags: ["Italian", "Coffee", "Creamy"]
            },
            {
                id: 8,
                name: "Craft Cocktails",
                description: "Selection of signature cocktails made with premium spirits and fresh ingredients.",
                price: 13.99,
                category: "drink",
                image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                tags: ["Alcoholic", "Craft", "Premium"]
            },
            {
                id: 9,
                name: "Fresh Fruit Smoothies",
                description: "Blended seasonal fruits with yogurt or plant-based milk options.",
                price: 7.99,
                category: "drink",
                image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1456&q=80",
                tags: ["Healthy", "Refreshing", "Fruity"]
            },
            {
                id: 10,
                name: "Herb Crusted Lamb Chops",
                description: "New Zealand lamb chops with herb crust, mint sauce, and roasted potatoes.",
                price: 28.99,
                category: "main",
                image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                tags: ["Lamb", "Premium", "Herbs"]
            },
            {
                id: 11,
                name: "Vegetable Spring Rolls",
                description: "Crispy rolls filled with fresh vegetables, served with sweet chili sauce.",
                price: 10.99,
                category: "appetizer",
                image: "https://images.unsplash.com/photo-1626803775023-bf37b6d2d3c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
                tags: ["Vegetarian", "Asian", "Crispy"]
            },
            {
                id: 12,
                name: "Cheesecake Trio",
                description: "Three mini cheesecakes: classic New York, strawberry swirl, and chocolate caramel.",
                price: 11.99,
                category: "dessert",
                image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
                tags: ["Cheesecake", "Variety", "Creamy"]
            }
        ];

        // DOM Elements
        const mealsGrid = document.getElementById('mealsGrid');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const selectedMealDisplay = document.getElementById('selectedMealDisplay');
        const selectedMealInfo = document.querySelector('.selected-meal-info');
        const changeMealBtn = document.getElementById('changeMealBtn');
        const selectedMealInput = document.getElementById('selectedMeal');
        const selectedMealPriceInput = document.getElementById('selectedMealPrice');
        const orderForm = document.getElementById('orderForm');
        const whatsappOrderBtn = document.getElementById('whatsappOrderBtn');
        const emailOrderBtn = document.getElementById('emailOrderBtn');
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        const header = document.getElementById('header');

        // Initialize the website
        document.addEventListener('DOMContentLoaded', function() {
            // This is how i render all meals initially
            renderMeals('all');
            
            // Setup filter buttons
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Get filter category
                    const filter = this.getAttribute('data-filter');
                    
                    // Render filtered meals
                    renderMeals(filter);
                });
            });
            
            // Setup mobile menu
            mobileMenuBtn.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                this.innerHTML = navMenu.classList.contains('active') ? 
                    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
            });
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('nav a').forEach(link => {
                link.addEventListener('click', function() {
                    navMenu.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
            
            // Setup scroll animations
            setupScrollAnimations();
            
            // Setup header scroll effect
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
      
      // Setup order buttons
      whatsappOrderBtn.addEventListener('click', sendOrderViaWhatsApp);
      emailOrderBtn.addEventListener('click', sendOrderViaEmail);
      changeMealBtn.addEventListener('click', function() {
          // Scroll to menu section
          document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
      });
      
      // Trigger initial animations
      setTimeout(() => {
      document.querySelector('.hero-content').classList.add('visible');
      }, 300);
      });
      
      // Render meals based on filter
      function renderMeals(filter) {
          // Clear the grid
          mealsGrid.innerHTML = '';
          
          // Filter meals
          let filteredMeals = meals;
          if (filter !== 'all') {
              filteredMeals = meals.filter(meal => meal.category === filter);
          }
          
          // Create meal cards
          filteredMeals.forEach((meal, index) => {
                      const mealCard = document.createElement('div');
                      mealCard.className = `meal-card fade-in delay-${index % 3}`;
                      mealCard.setAttribute('data-category', meal.category);
                      
                      mealCard.innerHTML = `
                    <div class="meal-img">
                        <img src="${meal.image}" alt="${meal.name}">
                    </div>
                    <div class="meal-content">
                        <div class="meal-title">
                            <h4>${meal.name}</h4>
                            <span class="meal-price">$${meal.price}</span>
                        </div>
                        <p class="meal-desc">${meal.description}</p>
                        <div class="meal-tags">
                            ${meal.tags.map(tag => `<span class="meal-tag">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                      
                      // Add click event to select meal
                      mealCard.addEventListener('click', function() {
                          selectMeal(meal);
                      });
                      
                            // Add to grid
      mealsGrid.appendChild(mealCard);
      });
      
      // Trigger animations for visible cards
      setTimeout(() => {
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                  }
              });
          }, { threshold: 0.1 });
          
          document.querySelectorAll('.meal-card').forEach(card => {
              observer.observe(card);
          });
      }, 100);
      }
      
      // Select a meal for ordering
      function selectMeal(meal) {
          // Update selected meal display
          selectedMealInfo.innerHTML = `
                <h4>${meal.name}</h4>
                <p>$${meal.price} | ${meal.tags.join(', ')}</p>
            `;
          
          // Update hidden inputs
          selectedMealInput.value = meal.name;
          selectedMealPriceInput.value = meal.price;
          
          // Scroll to order section
          document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
          
          // Highlight the selected meal in menu
          document.querySelectorAll('.meal-card').forEach(card => {
              card.classList.remove('selected');
              const cardTitle = card.querySelector('.meal-title h4');
              if (cardTitle && cardTitle.textContent === meal.name) {
                  card.classList.add('selected');
                  card.style.border = '2px solid var(--primary)';
              } else {
                  card.style.border = 'none';
              }
          });
      }
      
      // Setup scroll animations
      function setupScrollAnimations() {
          const observerOptions = {
              threshold: 0.1,
              rootMargin: '0px 0px -50px 0px'
          };
          
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('visible');
                  }
              });
          }, observerOptions);
          
          // Observe all elements with animation classes
          document.querySelectorAll('.section-title, .section-subtitle, .about-img, .about-text, .order-section, .rider-card, .contact-item').forEach(el => {
              observer.observe(el);
          });
      }
      
      
             // Send order via WhatsApp
       function sendOrderViaWhatsApp() {
           // Validate form
           if (!validateForm()) return;
           
           const name = document.getElementById('name').value;
           const phone = document.getElementById('phone').value;
           const email = document.getElementById('email').value;
           const address = document.getElementById('address').value;
           const instructions = document.getElementById('instructions').value;
           const meal = selectedMealInput.value;
           const price = selectedMealPriceInput.value;
           
           if (!meal) {
               alert('Please select a meal from the menu first!');
               document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
               return;
           }
           
           // Create message
           const message = `New Order from Heralds Meal Website:%0A%0A` +
               `*Customer Details:*%0A` +
               `Name: ${name}%0A` +
               `Phone: ${phone}%0A` +
               `Email: ${email}%0A` +
               `Address: ${address}%0A%0A` +
               `*Order Details:*%0A` +
               `Meal: ${meal}%0A` +
               `Price: $${price}%0A` +
               `Special Instructions: ${instructions || 'None'}`;
           
           // Open WhatsApp with pre-filled message
           // Replace with your actual WhatsApp number (with country code, without +)
           const whatsappNumber = "234 8083020898";
           window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
       }
       
       // Send order via Email
       function sendOrderViaEmail() {
           // Validate form
           if (!validateForm()) return;
           
           const name = document.getElementById('name').value;
           const phone = document.getElementById('phone').value;
           const email = document.getElementById('email').value;
           const address = document.getElementById('address').value;
           const instructions = document.getElementById('instructions').value;
           const meal = selectedMealInput.value;
           const price = selectedMealPriceInput.value;
           
           if (!meal) {
               alert('Please select a meal from the menu first!');
               document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
               return;
           }
           
           // Create email content
           const subject = `New Order: ${meal} from ${name}`;
           const body = `New Order from Heralds Meal Website:\n\n` +
               `CUSTOMER DETAILS:\n` +
               `Name: ${name}\n` +
               `Phone: ${phone}\n` +
               `Email: ${email}\n` +
               `Address: ${address}\n\n` +
               `ORDER DETAILS:\n` +
               `Meal: ${meal}\n` +
               `Price: $${price}\n` +
               `Special Instructions: ${instructions || 'None'}\n\n` +
               `This order was placed via the Heralds Meal website.`;
           
           // Open mail client
           window.location.href = `mailto:franklinelisha73@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
           
           // Show success message
           setTimeout(() => {
               alert('please wait...');
               orderForm.reset();
               selectedMealInput.value = '';
               selectedMealPriceInput.value = '';
               selectedMealInfo.innerHTML = `
                    <h4>No meal selected</h4>
                    <p>Click on a meal from the menu above to add it to your order</p>
                `;
           }, 500);
       }
       
       // Validate form
       function validateForm() {
           const name = document.getElementById('name').value;
           const phone = document.getElementById('phone').value;
           const email = document.getElementById('email').value;
           const address = document.getElementById('address').value;
           
           if (!name || !phone || !email || !address) {
               alert('Please fill in all required fields: Name, Phone, Email, and Address.');
               return false;
           }
           
           // Simple email validation
           const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
           if (!emailRegex.test(email)) {
               alert('Please enter a valid email address.');
               return false;
           }
           
           return true;
       }
 