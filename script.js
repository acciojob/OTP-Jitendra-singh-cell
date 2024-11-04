//your JS code here. If required.
const codes = document.querySelectorAll('.code');

// Focus next input on entering a number, or focus previous input on backspace
codes.forEach((code, index) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9') {
            // Move to the next input
            codes[index].value = ''; // Reset current value
            setTimeout(() => {
                if (index < codes.length - 1) {
                    codes[index + 1].focus();
                }
            }, 10);
        } else if (e.key === 'Backspace') {
            // Move to the previous input on backspace
            setTimeout(() => {
                if (index > 0) {
                    codes[index - 1].focus();
                }
            }, 10);
        }
    });
});
