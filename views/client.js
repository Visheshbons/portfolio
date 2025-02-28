function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
  }

if (detectMob()) {
    console.log('Mobile detected');
}


