from django.forms.widgets import Widget

class MoleculeEditor(Widget):
    template_name = 'django_rdkit/widgets/molecule_editor.html'

