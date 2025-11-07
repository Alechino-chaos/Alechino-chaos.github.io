document.addEventListener('DOMContentLoaded', function() {
  const targetText = "Why not let your wrath incinerate the scroll of destiny? Are you willing to become the Blazing Sun?";
  const maxLength = 60;
  const typeSpeed = 100;
  
  // 定位中间文字的容器（直接替换原有文字）
  const container = document.createElement('div');
  container.id = 'typewriter-container';
  container.style.fontSize = '24px';
  container.style.color = '#fff';
  container.style.textAlign = 'center';
  container.style.position = 'absolute';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.zIndex = '999'; // 确保文字在最上层
  
  // 找到并隐藏原有文字
  const originalText = document.querySelector('.page').querySelector('div');
  if (originalText) {
    originalText.style.display = 'none';
  }
  
  document.querySelector('.page').appendChild(container);

  let currentIndex = 0;
  function type() {
    if (currentIndex < targetText.length) {
      container.textContent += targetText[currentIndex];
      currentIndex++;
      if (container.textContent.length > maxLength) {
        container.textContent = container.textContent.slice(1);
      }
      setTimeout(type, typeSpeed);
    } else {
      currentIndex = 0;
      container.textContent = '';
      setTimeout(type, 500);
    }
  }

  type();
});