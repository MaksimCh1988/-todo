import itemIcon from './itemIcon.svg';
import closeIcon from './closeIcon.svg';
import checkIcon from './checkIcon.svg';

function Item() {
  const itemStyle = {
    fontSize: '18px',
    padding: '10px',
    border: '1px solid white',
    width: '410px',
    margin: '0 auto',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom : '10px'
  };

  return (
    <div style={itemStyle}>
      <img src={itemIcon} alt="itemIcon" />
      <p>Какое-то там дело</p>
      <img src={checkIcon} alt="checkIcon" />
      <img src={closeIcon} alt="closeIcon" />
    </div>
  );
}

export default Item;
