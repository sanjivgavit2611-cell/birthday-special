function showSurprise() {
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('surpriseBtn').style.display = 'none';
    
    // Aap yahan confetti library bhi add kar sakte hain
    alert("Surprise! 🎉 Janamdin Mubarak!");
}
