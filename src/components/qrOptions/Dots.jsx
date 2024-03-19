
export const Dots = () => {
    return (
        <>
        <div className="d-flex gap-2 align-items-center justify-content-center">
            <label for="exampleColorInput" class="form-label">Color picker</label>
            <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"></input>

            <select className="form-select w-25" aria-label="Select extension" defaultValue="rounded">

                <option value="rounded">Rounded</option>
                <option value="dots">Dots</option>
                <option value="classy">Classy</option>
                <option value="classy-rounded">Classy-rounded</option>
                <option value="square">Square</option>
                <option value="extra-rounded">Extra-rounded</option>

            </select>
        </div>
            
            
        </>
    )
}
