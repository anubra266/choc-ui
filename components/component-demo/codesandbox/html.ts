const section = (path) => path.split("/")[0];

export const html = (path) => {
  const name = section(path);
  const htmlContent = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Choc UI - ${name} demo</title>
    </head>
    <body>
        <div id="root"></div>
    </body>
    </html>`;
  return htmlContent;
};
