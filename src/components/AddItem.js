import React from 'react';

const AddItem = (props) => {
    console.log(props)

    let newItem = {
        product: {
          id: 40,
          name: 'Mediocre Iron Watch',
          priceInCents: 399
        },
        quantity: 1
      }

    return (
        <div className="container">
        <form onSubmit={props.addItem}>
        <div class="form-group">
            <label for="exampleInputEmail1">Quantity</label>
            <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Quantity"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
            <option>Apple</option>
            <option>Banana</option>
            <option>Carrot</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}

export default AddItem;