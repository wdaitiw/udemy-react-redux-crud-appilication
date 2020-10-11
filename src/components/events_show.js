import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { getEvent, deleteEvent, putEvent } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class EventsShow extends Component {
    constructor(props) {
        console.log("EVENTSHOW")
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    componentDidMount() {
        const { id } = this.props.match.params
        if (id) this.props.getEvent(id)//idがある場合は
    }



    renderField(field) {
        const { input, label, type, meta: { touched, error } } = field
        return (
            <TextField
                hintText={label}
                floatingLabelText={label}
                type={type}
                errorText={error}
                {...input}
                fullWidth
            />
        )
    }
    async onDeleteClick() {
        const { id } = this.props.match.params
        await this.props.deleteEvent(id)
        this.props.history.push('/')
    }

    async onSubmit(values) {
        await this.props.putEvent(values)
        this.props.history.push('/')
        // propsにhistoryが存在するのは、react-router-domライブラリからimportしているRouteコンポーネントで描画されたコンポーネントでは、
        // propsにhistoryが組み込まれるためです。逆に、このようにしないとhistoryオブジェクトは渡ってきません。
        // ↑pushはただの画面遷移。おきまりの書き方ではあるものの、単純に画面遷移をする際にはこう書く！
    }

    render() {
        //pristine何も入力していない状態だとtrue
        //submitting一回submitを押すまではfalse
        const { handleSubmit, pristine, submitting, invalid } = this.props
        const style = { margin: 12 }
        return (
            <React.Fragment>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    {/* onSubmitはformタグに特化する特殊なpropで、formタグでwrapされる内部のinputタグの内、
                    種別がsubmitのinputタグがクリックされた時に発火するイベントを処理するための関数を登録することができます。 
                    ここでは関数として、handleSubmit(this.onSubmit)が設定されていますが、これは、redux-formの提供するHigher Order Componentである
                    reduxFormというコンポーネントを使って、自前のコンポーネントをwrapすると、
                    wrapされたコンポーネントの機能が拡張(よくdecorateという言葉で表現されます)されます。*/}
                    <div>
                        <Field label="Title" name="title" type="text" component={this.renderField} />
                        <Field label="Bodd" name="body" type="text" component={this.renderField} />
                    </div>
                    <div>
                        <RaisedButton label="Submit" type="submit" style={style} disabled={pristine || submitting || invalid} />
                        <RaisedButton label="Cancel" style={style} containerElement={<Link to="/" />} />
                        <RaisedButton label="Delete" style={style} onClick={this.onDeleteClick} />
                    </div>
                </form>
            </React.Fragment >
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const event = state.events[ownProps.match.params.id]
    return { initialValues: event }
}
const mapDispatchToProps = ({ deleteEvent, getEvent, putEvent })

//エラー処理
const validate = value => {
    const errors = {}
    if (!value.title) errors.title = "Enter a title, please."
    if (!value.body) errors.body = "Enter a body, please."
    return errors
}

export default connect(mapStateToProps, mapDispatchToProps)(
    reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)
