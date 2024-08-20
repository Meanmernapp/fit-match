
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const skills = [
  { value: 'Group Personal Training', label: 'Group Personal Training' },
  { value: 'At-Home Personal Training', label: 'At-Home Personal Training' },
  { value: 'Mobility Training Nutrition (General)', label: 'Mobility Training' },
  { value: 'Physique and Bodybuilding', label: 'Physique and Bodybuilding)' },
  { value: 'Pilates', label: 'Pilates' },
  { value: 'Powerlifting', label: 'Powerlifting' },
  { value: 'Prenatal and Postpartum', label: 'Prenatal and Postpartum' },
  { value: 'Running Coach', label: 'Running Coach' },
  { value: 'Senior Fitness', label: 'Senior Fitness' },
  { value: 'Sports Nutrition', label: 'Sports Nutrition' },
  { value: 'Sports Performance Enhancement Coaching', label: 'Sports Performance Enhancement Coaching' },
  { value: 'Strength and Conditioning', label: 'Strength and Conditioning' },
  { value: 'Stretching and Flexibility', label: 'Stretching and Flexibility' },
  { value: 'Virtual Coaching', label: 'Virtual Coaching' },
  { value: 'Weight Loss', label: 'Weight Loss' },
  { value: 'Weightlifting', label: 'Weightlifting' },
  { value: 'Wellness', label: 'Wellness' },
  { value: 'Yoga', label: 'Yoga' },
  { value: 'Youth Exercise', label: 'Youth Exercise' }
];

const MultiSelectDropdown = ({ setFieldValue, values, errors, touched }) => {
  const animatedComponents = makeAnimated();

  const handleChange = (selectedOptions) => {
    setFieldValue('skills', selectedOptions ? selectedOptions.map(option => option.value) : []);
  };

  return (
    <div>
      <Select
        options={skills}
        isMulti
        components={animatedComponents}
        value={values.skills.map(skill => skills.find(option => option.value === skill))}
        onChange={handleChange}
        placeholder="Select skills..."
      />
      {errors.skills && touched.skills ? (
        <div className="error">{errors.skills}</div>
      ) : null}
    </div>
  );
};

export default MultiSelectDropdown;
