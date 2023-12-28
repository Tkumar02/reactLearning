function ListComponent () {
    let a=[];
    for(let x=0;x<5;x++){
        let i = <div>{x}</div>
        a.push(i)
    }
    return a;
}

export default ListComponent;