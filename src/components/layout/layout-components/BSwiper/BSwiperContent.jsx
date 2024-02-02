export default function BSwiperContent({title, content, setContent}) {


    return(
        <>
            <h4>{title}</h4>
            <input type="textarea" name="content" value={content} onChange={() => setContent()}></input>
        </>
    )
}