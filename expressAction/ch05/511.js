// serving static files from multiple directories

var publicPath = path.resolve(__dirname, "pubic");
var userUploadsPath = path.resolve(__dirname, "user_uploads");

app.use(express.static(publicPath));
app.use(express.static(userUploadsPath));

// serving static files from multiple dir without conflict

app.use("public", express.static(publicPath));
app.use("/uploads", express.static(userUploadsPath));