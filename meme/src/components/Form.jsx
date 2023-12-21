const Form = () => {
  return (
    <main>
      <form className="form-div">
        <div className="form-container">
          <label>Top Text</label>
          <input type="text" placeholder="Shut up" className="input-div" />
        </div>
        <div className="form-container">
          <label>Bottom Text</label>
          <input
            type="text"
            placeholder="And take my money"
            className="input-div"
          />
        </div>
      </form>
      <button className="btn-div">Get a new meme image 🖼</button>
    </main>
  );
};

export default Form;
