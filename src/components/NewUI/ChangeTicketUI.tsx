import CustomMultiSelect from "./comboBox";
import TypographyEditor from "./typographyComp";
import FileMultiSelect from "./multiFileCombobox";


interface ChangeProps {
  type: 'Incident' | 'Service' | 'Change';
  onSubmit: (data: any) => void;
  onCancel: () => void;
  onTypeChange: (newType: 'Incident' | 'Service' | 'Change') => void;
  email: string[];
  setEmail: (emails: string[]) => void;
  description: string;
  setDescription: (emails: string) => void;
  description2: string;
  setDescription2: (emails: string) => void;
  description3: string;
  setDescription3: (emails: string) => void;
  affectedUsers: string
  setAffectedUsers: (affectedUsers: string) => void;
  severity: string
  setSeverity: (severity: string) => void;
  attachments: File[];
  setAttachments: (attachments: File[]) => void;
  subject: string
  setSubject: (subject :string) => void
}

const ChangeTicketUI = ({ type, onSubmit, onCancel, onTypeChange, email, setEmail, description, setDescription, description2, setDescription2, description3, setDescription3, affectedUsers, setAffectedUsers, severity, setSeverity, attachments, setAttachments, subject, setSubject  }: ChangeProps) => {
  return (
    <form style={form} onSubmit={(e) => { e.preventDefault();}}>

      <span style={formtitle}>
        Raise a Ticket - {type} Request
      </span>
        
      <div>
        <label style={label}>To Email</label>
        <CustomMultiSelect
          multiple={true} 
          options={['user1@example.com', 'user2@example.com', 'user3@example.com']} 
          placeholder="Select recipients..."
          value={email} 
          onChange={(val) => setEmail(val)} 
        />
      </div>
        
      <div>
        <label style={label}>Ticket Type</label>
        <CustomMultiSelect 
              multiple={false} 
              options={["Incident", "Service", "Change"]}
              value={[type]} 
              onChange={(val) => {
            if (val.length > 0) {
              onTypeChange(val[0] as 'Incident' | 'Service' | 'Change');
            }
          }}
            />
      </div>


      <div>
        <label htmlFor="subject" style={label}>Subject / Title</label>
        <input id="subject" type="text" 
        placeholder="e.g. network connectivity" 
        style={inputStyle} 
        value={subject} 
        onChange={(e) => setSubject(e.target.value)} />
      </div>
      
      <div>
        <label>Detailed Description</label>
        <TypographyEditor 
        value={description} 
        onChange={(html) => setDescription(html)} 
        />
      </div>
      
      <div>
        <label>Detailed Description</label>
      <TypographyEditor 
        value={description2} 
        onChange={(html) => setDescription2(html)} 
      />
      </div>


      <div>
        <label>Detailed Description</label>
      <TypographyEditor 
        value={description3} 
        onChange={(html) => setDescription3(html)} 
      />
      </div>

      <div style={double}>
            <div style={inputDiv}>
              <label htmlFor="subject">Affected Users</label>
              <input 
              type="text" 
              placeholder="" 
              style={{...inputStyle}}
              value={affectedUsers}
              onChange={(e) => setAffectedUsers(e.target.value)}
               />
               
            </div> 

            <div style={inputDiv}>
              <label htmlFor="subject" style={{marginBottom: '4px'}}>Severity</label>
              <CustomMultiSelect
              id="ticket"
              multiple={false} 
              options={["Incident", "Service", "Change"]}
              value={[severity]}
              onChange={(val) => {
                if (val && val.length > 0) {
                  setSeverity(val[0]); 
                }
              }}
            />
            </div> 
          </div>



         
          <div style={inputDiv}>
            <label>Attachments</label>
            <FileMultiSelect 
            selectedFiles={attachments} 
            onFilesChange={(files) => setAttachments(files)} 
            placeholder="Click to upload documents or screenshots..."
          />
          </div>
           

          
          <button type="submit" className="submitForm">Submit</button>

    </form>
  );
};

export default ChangeTicketUI;

const formtitle:React.CSSProperties  = {
  fontSize: '18px',
  fontWeight: '600',
  marginBottom: '20px',
  margin: 0,
  color: '#3A4050',
}
const form:React.CSSProperties  = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  height: 'auto',
}
const inputStyle:React.CSSProperties  = {
  fontSize: '11px',
  padding: "10px "
}

const label:React.CSSProperties  = {
  fontSize: '12px',
}
const double:React.CSSProperties  = {
  display: 'flex',
  gap: '20px',
  alignItems: 'baseline'
}
const inputDiv:React.CSSProperties = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}