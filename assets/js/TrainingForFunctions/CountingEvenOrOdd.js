function countDigits(nums, mode = 'even') {
    if (mode !== 'even' && mode !== 'odd') {
      throw new Error("mode must be 'even' or 'odd'");
    }
    return nums.map(n => {
      const digits = Math.abs(n).toString().split('');
      let count = 0;
      digits.forEach(dChar => {
        const d = parseInt(dChar, 10);
        if (mode === 'even' && d % 2 === 0) count++;
        if (mode === 'odd' && d % 2 !== 0) count++;
      });
      return count;
    });
  }

  document.getElementById('countBtn').addEventListener('click', () => {
    const numsInput = document.getElementById('nums').value;
    const mode = document.getElementById('mode').value;

    const nums = numsInput.split(' ').map(s => parseInt(s.trim(), 10)).filter(n => !isNaN(n));
    try {
      const counts = countDigits(nums, mode);
      document.getElementById('result').textContent = 
        `resualt: [ ${counts.join(', ')} ]`;
    } catch (err) {
      document.getElementById('result').textContent = err.message;
    }
  });