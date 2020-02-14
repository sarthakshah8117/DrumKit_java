(() => {
  let  keys = Array.from(document.querySelectorAll('.key'));

  keys.forEach(key => key.addEventListener('transitionend', resetKey));




  function resetKey() {
    this.classList.remove('playing');
  }


  //add an event listener to the window
  // and capture all the keyboard  key preesses

  function playSound(event){
    // debugger;
    let audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
      let key = document.querySelector(`div[data-key="${event.keyCode}"]`);

    // this is a check for inequality (it mrans the condition is false)
    // also called a bang operator
    // if there is no matching audio element, then kill the function and do nothing
    if (!audioElement) { return; }
    // if we match, then play the sound that goes with the keyboard key
    audioElement.currentTime = 0;
    audioElement.play(); // round brackets means this is


    key.classList.add('playing');
  }
  window.addEventListener('keydown', playSound);




})();
