import React from 'react';

const AddItem = (props) => {
    console.log(props)
    return (
        <div className="container">
        <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleFormControlSelect1">Example select</label>
            <select class="form-control" id="exampleFormControlSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            </select>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}

export default AddItem;