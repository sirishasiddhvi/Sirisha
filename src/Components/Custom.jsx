export const TableCustom=()=>{
    const columns = [
        { id: "id", label: "ID" },
        { id: "name", label: "Name" },
        { id: "mobile", label: "Mobile" },
        { id: "status", label: "Status" },
      ];
      const user=[
        {id:"1",name:"sdsd",mobile:"1545445444",status:"1"},
        {id:"2",name:"sdshgd",mobile:"1545145444",status:"1"},
        {id:"3",name:"yghsd",mobile:"1579845444",status:"1"},
        {id:"4",name:"hj",mobile:"1545435656",status:"1"}
      ]
    return(
        <CustomTable
        stickyHeader
        size="small"
        columns={columns}
        data={user}
        />
    )
}