export function deleteTicket({ req, res, database }){
  const { id } = req.params

  database.delete("tickets", id)

  return res.end()
}