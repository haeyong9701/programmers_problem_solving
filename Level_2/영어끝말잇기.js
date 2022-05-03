function solution(n, words) {
  let answer = [];
  // 실제 끝말잇기를 생각하면서 구현해보자.
  // answer에 하나씩 푸쉬
  for (let i = 0; i < words.length; i++) {
    // 빈 배열일 때 첫단어 푸쉬
    if (i === 0) {
      answer.push(words[i]);
    }
    // 중복 단어 있는지 체크, 앞에 단어의 끝자리와 지금 단어의 앞자리 같은지 체크
    else if (!answer.includes(words[i]) && words[i - 1][words[i - 1].length - 1] === words[i][0]) {
      answer.push(words[i]);
    }
    // 끝말잇기의 규칙에 어긋난다면 [번호, 차례] 리턴
    else {
      return [(i % n) + 1, parseInt(i / n) + 1];
    }
  }

  return [0, 0];
}
