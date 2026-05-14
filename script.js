document.addEventListener('DOMContentLoaded', () => {
    const amountBtns = document.querySelectorAll('.amount-btn');
    const customAmountInput = document.getElementById('customAmount');
    const displayAmount = document.getElementById('displayAmount');
    const donorForm = document.getElementById('donorForm');

    // Function to format amount with commas
    const formatAmount = (amount) => {
        return Number(amount).toLocaleString('en-IN');
    };

    // Update the button text
    const updateSubmitButton = (amount) => {
        if (amount && amount > 0) {
            displayAmount.textContent = `₹ ${formatAmount(amount)}`;
        } else {
            displayAmount.textContent = '';
        }
    };

    // Handle amount button clicks
    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all
            amountBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked
            btn.classList.add('active');
            
            // Get amount
            const amount = btn.getAttribute('data-amount');
            
            // Sync with custom input
            customAmountInput.value = amount;
            
            // Update submit button
            updateSubmitButton(amount);
        });
    });

    // Handle custom input changes
    customAmountInput.addEventListener('input', (e) => {
        const amount = e.target.value;
        
        // Remove active state from preset buttons if it doesn't match
        let matched = false;
        amountBtns.forEach(btn => {
            if (btn.getAttribute('data-amount') === amount) {
                btn.classList.add('active');
                matched = true;
            } else {
                btn.classList.remove('active');
            }
        });

        // Update submit button
        updateSubmitButton(amount);
    });

    // Handle form submission
    donorForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const amount = customAmountInput.value;
        const name = document.getElementById('donorName').value;
        
        if (!amount || amount <= 0) {
            alert('Please enter a valid donation amount.');
            return;
        }

        const submitBtn = donorForm.querySelector('.donate-submit-btn');
        const originalText = submitBtn.innerHTML;
        
        // Simulating redirect to Razorpay
        submitBtn.innerHTML = 'Redirecting to secure gateway... 🔄';
        submitBtn.style.opacity = '0.8';
        submitBtn.disabled = true;

        setTimeout(() => {
            // In reality, this would submit to your backend to generate a Razorpay order ID,
            // or redirect directly to the Razorpay payment link.
            alert(`Thank you, ${name}! Redirecting you to Razorpay to complete your donation of ₹${formatAmount(amount)}...`);
            
            // Redirect to their actual razorpay link 
            window.location.href = "https://rzp.io/l/kWQ87HP";
            
            // Reset state in case they hit back
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }, 1000);
        }, 1500);
    });
});
