const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors()); // 允許跨域請求
app.use(history()); // 允許vue history mode請求

// production版本部署設定
if (process.env.NODE_ENV === 'production') {
  // 參照/dist vue-cli compile出來的東東
  app.use(express.static(__dirname + '/dist/'))

  // Handle MPA
  app.get(/.*/, (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
  })
}

app.listen(port);
console.log('server started ' + port);