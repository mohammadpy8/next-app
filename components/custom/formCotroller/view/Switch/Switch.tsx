type SwitchProps = {
    label?: string
    valid?: boolean
    type: 'INPUT' | 'SWITCH' | 'RADIOBUTTON' | 'TEXTEREA' | 'COMBOBOX'
    placeholder?: string
    dataForm?: any | null
    customSx: null
  }
const Switch = (props: SwitchProps) => {
    return (
        <div>
            switch
        </div>
    );
};

export  {Switch};