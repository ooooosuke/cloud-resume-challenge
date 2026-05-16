window.addEventListener('DOMContentLoaded', () => {
    // あなたの API Gateway 呼び出し URL (Chunk 2 で作成したもの)
    const apiURL = 'https://mxz8dptz41.execute-api.ap-northeast-1.amazonaws.com/prod/getcount';

    fetch(apiURL, {
        method: 'POST', // Chunk 2 で設定したメソッド
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data); // デバッグ用
        // HTML要素を更新
        document.getElementById('counter').innerText = data.count;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('counter').innerText = 'Error';
    });
});