import Item from './Item'

const List = ({ listData, deleteData, submittingStatus }) => {
  console.log('listData', listData)
  return ( 
    <div className="list">
      {listData.map(item => {
          const { note, date, time, id } = item;
          return (
            <Item 
              key={id}
              id={id}
              note={note} 
              date={date} 
              time={time}
              deleteData={deleteData}
              submittingStatus={submittingStatus}
              />
        );
      })} 
    </div>
  ); 
};

export default List;


// note:
// const arr = [1, 2, 3]
// {
//   arr.map(item =><div>{item}</div>)
// }