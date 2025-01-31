interface CollapsibleDetailsProps {
    title: string;
    items: {
        key: string;
        value: string;
    }[]
}

export const CollapsibleDetails = (props: CollapsibleDetailsProps) => {
    return (
        <details>
            <summary style={{fontWeight: 600}}>{props.title}</summary>
            <div style={{padding: 15, display: 'flex', flexDirection: 'column', gap: 15}}>
                {props.items.map((item, index) => {
                    return (
                        <div key={index}>
                            <p style={{fontWeight: 600}}>{item.key}</p>
                            <p>{item.value}</p>
                        </div>
                    )
                })}
            </div>
        </details>
    )
}