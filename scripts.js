
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-2YDZTJCJC2');
  

 const questionMark = document.querySelector('.question-mark');
    const tooltip = document.querySelector('.tooltip');
  
    questionMark.addEventListener('mouseover', () => {
      tooltip.style.display = 'inline-block';
    });
  
    questionMark.addEventListener('mouseout', () => {
      tooltip.style.display = 'none';
    });
  
    // Optional: If you want to hide the tooltip when the mouse moves away from it, add the following code
    tooltip.addEventListener('mouseout', () => {
      tooltip.style.display = 'none';
    });


    document.addEventListener('DOMContentLoaded', function() {
        new fullpage('#fullpage', {
            //options here
            autoScrolling: true,
            scrollHorizontally: true
        });
    });
    