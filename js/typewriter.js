document.addEventListener('DOMContentLoaded', function() {
  // 目标文本（需替换为你想要的内容）
  const targetText = "Why not let your wrath incinerate the scroll of destiny? Are you willing to become the Blazing Sun?";
  // 限定显示长度（例如 30 个字符）
  const maxLength = 30;
  // 打字速度（毫秒/字符）
  const typeSpeed = 100;
  // 循环容器
  const container = document.createElement('div');
  container.id = 'typewriter-container';
  container.style.fontSize = '24px';
  container.style.color = '#fff';
  container.style.textAlign = 'center';
  document.getElementById('page-header').appendChild(container);

  // 核心打字逻辑：逐字添加，超出长度则删除头部字符，循环执行
  let currentIndex = 0;
  function type() {
    if (currentIndex < targetText.length) {
      container.textContent += targetText[currentIndex];
      currentIndex++;
      // 超出长度时，删除第一个字符
      if (container.textContent.length > maxLength) {
        container.textContent = container.textContent.slice(1);
      }
      setTimeout(type, typeSpeed);
    } else {
      // 循环从头开始
      currentIndex = 0;
      container.textContent = '';
      setTimeout(type, 500); // 循环间隔
    }
  }

  type();
});