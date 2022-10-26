import React from 'react';
import Helmet from 'react-helmet';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../store/asyncMethods/PostMethods";
import toast, { Toaster } from 'react-hot-toast';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase";
import { v4 } from "uuid";

const Create = (props) => {
    const { createErrors, redirect } = useSelector((state) => state.PostReducer);

    const dispatch = useDispatch();
    const { user: { _id, name } } = useSelector(state => state.AuthReducer);

    const [imageName, setImageName] = useState(null);
    const [imagePreview, setImagePreview] = useState('');

    const fileHandle = (e) => {
        if (e.target.files.length !== 0) {
            setImageName(e.target.files[0]);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            }
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    const [state, setState] = useState({
        title: '',
        description: '',
        category: 'technology',
        image: ''
    });

    const [categoryVal, setcategoryVal] = useState('technology');

    const handleDescription = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const [slug, setSlug] = useState('');
    const [slugButton, setSlugButton] = useState(false);

    const slugHandle = (e) => {
        setSlugButton(true);
        setSlug(e.target.value);
    }

    const handleURL = (e) => {
        e.preventDefault();
        setSlug(slug.trim().split(' ').join('-'));
    }


    const handleInput = (e) => {
        setState({
            [e.target.name]: e.target.value,
        });
        const createSlug = e.target.value.trim().split(' ').join('-');
        setSlug(createSlug);
    }

    const handleCategory = (e) => {
        setcategoryVal(e.target.value);
    }

    const createPost = (e) => {
        e.preventDefault();
        const imageRef = ref(storage, `allPostImages/${imageName.name + v4()}`);
        uploadBytes(imageRef, imageName).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                dispatch(createAction({
                    title: state.title,
                    slug: slug,
                    category: categoryVal,
                    imageUrl: url,
                    description: state.description,
                    id: _id
                })
                );
            });
        })
    }

    useEffect(() => {
        if (redirect) {
            props.history.push("/dashboard");
        }
        if (createErrors.length > 0) {
            createErrors.map((error) => {
                toast.error(error.msg);
            })
        }

    }, [createErrors, redirect]);


    // category new
    // const [cat, setCat] = useState(false);

    // const setCatFun = () => {
    //     setCat(!cat);
    // }


    return (
        <div className="create mt-96 mt-128">
            <Helmet>
                <title>Create Post</title>
                <meta
                    name="description"
                    content="Create a new post"
                />
            </Helmet>
            <Toaster
                position="top-right"
                reverseOrder={false}
                toastOptions={{
                    style: {
                        border: '1px solid #713200',
                        fontSize: "0.8rem"
                    },
                }}
            />
            <div className="container">
                <form onSubmit={createPost}>
                    <div className='row'>
                        <div className='col-1'>
                            <div className="group">
                                <input type="submit" className="btn" name="" id="" value="PUBLISH" />
                            </div>
                        </div>
                    </div>
                    <div className="row ml-minus-16 mr-minus-16">
                        <div className="col-9" style={{ padding: "1rem" }}>
                            <div className="card">
                                <h3 className="card__h3">Create a new post</h3>

                                <div className="group">
                                    <label htmlFor="title">Post title</label>
                                    <input type="text"
                                        name="title"
                                        id="title"
                                        value={state.title}
                                        onChange={handleInput}
                                        className="group__control"
                                        placeholder="Post title" />
                                </div>
                                <div className="group">
                                    <label htmlFor="slug">Post URL(This will generate automatically)</label>
                                    <input type="text"
                                        name="slug"
                                        value={slug}
                                        id="slug"
                                        className="group__control"
                                        onChange={slugHandle}
                                        placeholder="Post URL" />
                                </div>

                                {/* <div className="group">
                                    <label htmlFor="">Category</label>
                                    <div className='cat' onClick={() => setCatFun()}>Categ</div>
                                    
                                        <ul className={cat ? "act" : null}>
                                            <li onClick={handleCategory}>Tech</li>
                                            <li onClick={handleCategory}>Entertainment</li>
                                            <li onClick={handleCategory}>Sports</li>
                                            <li onClick={handleCategory}>Lifestyle</li>
                                        </ul>
                                  
                                </div> */}

                                <div className="group">
                                    <label htmlFor="">Category</label>
                                    <select className="group__control" name="category" onClick={handleCategory}>
                                        <option value="technology">Technology</option>
                                        <option value="entertainment">Entertainment</option>
                                        <option value="sports">Sports</option>
                                        <option value="politics">Politics</option>
                                        <option value="health">Health</option>
                                        <option value="lifestyle">Lifestyle</option>
                                    </select>
                                </div>

                                <div className="group">
                                    <label htmlFor="">Select Image</label>
                                    <label htmlFor="image" className="image__label" style={{ textAlign: "center" }}>{imageName === null ? "Click to select image" : imageName.name}</label>
                                    <input type="file"
                                        name="image"
                                        id="image"
                                        className="group__control"
                                        onChange={fileHandle}
                                    />
                                </div>
                                <div className="group">
                                    <label htmlFor="">Image Preview Will Appear Here</label>
                                    <div className="imagePreview">
                                        {imagePreview ? <img src={imagePreview} /> : ''}
                                    </div>
                                </div>
                                {/* <div className="group">
                                    <label htmlFor="body">Blog Description</label>
                                    <ReactQuill theme="snow" cols="50" value={value} onChange={setValue} id="body" />
                                </div> */}
                                <div className="group">
                                    {slugButton ? (<button className="btn" onClick={handleURL}>Update Slug</button>) : ''}
                                </div>
                                <div className="group">
                                    <label htmlFor="description">Blog Description</label>
                                    <textarea
                                        style={{ height: "400px" }}
                                        name="description"
                                        id="description"
                                        cols="10"
                                        rows="10"
                                        defaultValue={state.description}
                                        onChange={handleDescription}
                                        className="group__control"
                                        placeholder="Write Your Blog Here..."
                                    ></textarea>
                                </div>


                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Create
