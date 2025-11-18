export default function({children}: 
    {children: React.ReactNode}) {

        return(
            <div>
                <div>Header</div>
                {children}
                <div>Footer</div>

            </div>
        )


    }
