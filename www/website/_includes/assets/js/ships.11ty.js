module.exports = function (ships) {
  return `
    <script>
      window.ships = ${JSON.stringify(ships.search)};
      window.shipTypes = ${JSON.stringify(ships.types)};
    </script>
  `;
};
