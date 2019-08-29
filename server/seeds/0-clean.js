exports.seed = function (knex, Promise) {
  const empty = table =>
    () => knex(table).del()

  return empty('wgtn')()
    .then(empty('auk'))
    .then(empty('chch'))
  // Chain calls to empty in
  // order as required, e.g.:
  // .then(empty('profiles'))
}
