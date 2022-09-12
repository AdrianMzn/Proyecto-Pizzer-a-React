

const Progress_bar = ({bgcolor,progress,height}) => {
  
    const Parentdiv = {
        height: height,
        width: '60%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        marginTop: '80px',
      }
      
      const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }
        
    return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
    )
}

export default Progress_bar;